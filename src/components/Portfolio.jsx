import React from "react";
import weallison from "../assets/portfolio/weallison.png";
import welcomeHomeBot from "../assets/portfolio/welcome-home-bot.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: weallison,
      demoUrl: "https://youtu.be/G_-fxXlKnzk",
      codeUrl: "https://github.com/jaysaavedra18/music-sharing-app",
    },
    {
      id: 2,
      src: welcomeHomeBot,
      demoUrl: "https://youtu.be/mMnXhzSfBOw",
      codeUrl: "https://github.com/jaysaavedra18/welcome-home-bot.git",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.reverse().map(({ id, src, demoUrl, codeUrl }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center p-2">
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
