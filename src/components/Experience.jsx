import React from "react";

import kotlin from "../assets/kotlin.png";
import jetpack from "../assets/jetpack.png";
import java from "../assets/java.png";
import firebase from "../assets/firebase.png";
import git from "../assets/git.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import sqlite from "../assets/sqlite.png";
import flutter from "../assets/flutter.png";
import dart from "../assets/dart.png";



const Experience = () => {
  const techs = [
    {
      id: 1,
      src: kotlin,
      title: "Kotlin",
      style: "shadow-purple-500",
    },
    {
      id: 2,
      src: jetpack,
      title: "Jetpack compose",
      style: "shadow-cyan-500",
    },
    {
      id: 3,
      src: java,
      title: "Java",
      style: "shadow-blue-300",
    },
    {
      id: 4,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-400",
    },
    {
      id: 5,
      src: sqlite,
      title: "SQLite",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: git,
      title: "Git",
      style: "shadow-red-600",
    },
    {
      id: 9,
      src: dart,
      title: "dart",
      style: "shadow-cyan-500",
    },
    {
      id: 7,
      src: css,
      title: "CSS",
      style: "shadow-purple-300",
    },
    {
      id: 10,
      src: flutter,
      title: "Flutter",
      style: "shadow-sky-400",
    },

    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-200",
    },

  ];

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
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
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