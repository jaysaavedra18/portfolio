import os
import boto3
from botocore.exceptions import NoCredentialsError, ClientError

def upload_directory_to_s3(local_directory, bucket_name, s3_client):
    try:
        for root, dirs, files in os.walk(local_directory):
            for file in files:
                local_file_path = os.path.join(root, file)
                relative_path = os.path.relpath(local_file_path, local_directory)
                s3_key = relative_path.replace("\\", "/")  # Adjust for S3 key format
                
                print(f"Uploading {local_file_path} to s3://{bucket_name}/{s3_key}")
                s3_client.upload_file(local_file_path, bucket_name, s3_key)
        print("All files uploaded successfully.")
    except FileNotFoundError as e:
        print(f"Error: File not found. {e}")
    except NoCredentialsError:
        print("Error: AWS credentials not found.")
    except ClientError as e:
        print(f"Error: {e}")

def invalidate_cloudfront_cache(distribution_id, paths, cloudfront_client):
    try:
        print(f"Invalidating CloudFront cache for distribution {distribution_id} and paths {paths}")
        response = cloudfront_client.create_invalidation(
            DistributionId=distribution_id,
            InvalidationBatch={
                'Paths': {
                    'Quantity': len(paths),
                    'Items': paths
                },
                'CallerReference': str(hash(tuple(paths)))  # Unique reference for the invalidation
            }
        )
        print(f"Invalidation request sent. ID: {response['Invalidation']['Id']}")
    except ClientError as e:
        print(f"Error invalidating CloudFront cache: {e}")


if __name__ == "__main__":
    # Update these variables
    local_directory = "dist"  # Specify your directory path
    bucket_name = "www.jamsenchiridion.com"
    distribution_id1 = "E17KV9W66F8OU4"
    distribution_id2 = "E1NL8U07QERTTC"

    # Initialize resource clients
    s3_client = boto3.client("s3")
    cloudfront_client = boto3.client("cloudfront")

    # Upload files to S3 bucket
    upload_directory_to_s3(local_directory, bucket_name, s3_client)

        # Invalidate CloudFront cache
    invalidate_paths = ["/*"]  # Invalidate all files
    invalidate_cloudfront_cache(distribution_id1, invalidate_paths, cloudfront_client)
    invalidate_cloudfront_cache(distribution_id2, invalidate_paths, cloudfront_client)
