import React from "react";
import heroImage from "../assets/heroImage1.jpg";
import { MdKeyboardArrowRight as RightArrow } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="text-white flex flex-col justify-center h-full mx-20 max-w-7xl">
          <h2 className="text-white text-4xl sm:text-7xl font-bold">
            I'm a full stack developer
          </h2>
          <p className="text-gray-500 max-w-md my-5">
            I'm a full stack developer with a B.S. in Computer Science from
            Purdue University. Concentrating in software engineering, I'm
            passionate about creating innovative solutions and finding more
            opportunities for making meaningful contributions to existing and
            new codebases.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-violet-500 to-blue-500"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <RightArrow size={24.987} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl mx-auto h-auto max-w-full md:w-full overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
