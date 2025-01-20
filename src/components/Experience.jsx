import React from "react";

import html from "../assets/experience/html.png";
import css from "../assets/experience/css.png";
import javascript from "../assets/experience/javascript.png";
import reactImage from "../assets/experience/react.png";
import github from "../assets/experience/github.png";
import tailwind from "../assets/experience/tailwind.png";
import aws from "../assets/experience/aws.png";
import django from "../assets/experience/django.png";
import python from "../assets/experience/python.png";
import go from "../assets/experience/go.png";

const Experience = () => {
  const techs = [
    { src: aws, title: "AWS", style: "shadow-yellow-700" },
    { src: python, title: "Python", style: "shadow-yellow-200" },
    { src: reactImage, title: "React", style: "shadow-blue-600" },
    { src: go, title: "Go", style: "shadow-sky-300" },
    { src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { src: html, title: "HTML", style: "shadow-orange-500" },
    { src: css, title: "CSS", style: "shadow-blue-500" },
    { src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { src: github, title: "GitHub", style: "shadow-gray-400" },
    // { src: django, title: "Django", style: "shadow-green-800" },
  ];
  let techId = 0;

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">
            These are the technologies I've worked with regularly
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ src, title, style }) => (
            <div
              key={techId++}
              className={`shadow-lg hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
