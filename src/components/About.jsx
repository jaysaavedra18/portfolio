import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          My journey in programming is driven by a genuine enthusiasm for
          discovering new solutions and continuously learning. The joy I
          experience from finally solving a bug is deeply fulfilling and
          motivates me to push the boundaries of what’s possible. So, I started
          my programming journey at Purdue learning Java, Python, C, then
          eventually delving into frameworks like Django and React to build more
          scalable and reactive applications.
        </p>
        <br />
        <p className="text-xl">
          For the past two years, I worked in IT Support at ECN (the Engineering
          Computer Network). It was here, I developed and maintained Python
          scripts to automate tasks and collaborated with the engineering team
          to enhance and debug tools using Git for version control. Got an idea
          of how the software development workflow works and got to focus on the
          client facing side of our company. Using PowerShell, our personal
          domain managing tool, and problem-solving skills we were able to
          resolve network issues, software requests and updates, hardware
          failures, amongst other things.
        </p>
        <br />
        <p className="text-xl">
          Now I seek to make meaningful contributions with my skills as Software
          Engineer. I urge you to check out my portfolio where my passion and
          eye for detail will shine through.
        </p>
      </div>
    </div>
  );
};

export default About;
