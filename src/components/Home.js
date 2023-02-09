import React from "react";
import { Link } from "react-router-dom"
import TimeLine from "./TimeLine";
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"

import linkedin from "../photos/linkedin.svg"
import hackerrank from "../photos/hackerrank.svg"
import github from "../photos/github.svg"
import leetcode from "../photos/leetcode.svg"
import photo2 from "../photos/profile.png"

const Home = () => {
  return (
    <div>
      <section className="text-gray-600 body-font" style={{marginTop:"70px"}}>
        <div className="container mx-auto flex pl-20 py-0 md:flex-row flex-col items-center">
          <div className="lg:flex-grow :w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" style={{marginLeft:"50px"}}>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" style={{marginTop:"20px"}}>
              Hi There,
              <br className="hidden lg:inline-block" />
              I'm Nitin Garg
            </h1>
            <p className="mb-8 leading-relaxed">I am into Web development</p>
            <div className="flex justify-center">
              <a href="/contact">
                <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Hire Me 🫱🏻‍🫲🏻
                </button>
              </a>
                <a target={"_blank"} rel="noreferrer" href="https://drive.google.com/file/d/1meBZdpDkB8N_ELFHuTQui75E_Ad-OpAp/view?usp=sharing">
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    My Resume
                  </button>
                </a>
            </div>
            <div style={{ display: "flex", height: "100px", width: "300px" }}>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link href="https://www.linkedin.com/in/nitin-garg-a93ba31b9">
                  <img
                    alt=""
                    className="object-cover object-center w-full h-full block"
                    src={linkedin}
                    style={{ objectFit: "contain" }}
                  />
                </Link>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link href="https://github.com/nitingarg2207">
                  <img
                    alt=""
                    className="object-cover object-center w-full h-full block"
                    src={github}
                    style={{ objectFit: "contain" }}
                  />
                </Link>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link href="https://leetcode.com/nitin2003">
                  <img
                    alt=""
                    className="object-cover object-center w-full h-full block"
                    src={leetcode}
                    style={{ objectFit: "contain" }}
                  />
                </Link>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link href="https://www.hackerrank.com/nitin1960_be20">
                  <img
                    alt=""
                    className="object-cover object-center w-full h-full block"
                    src={hackerrank}
                    style={{ objectFit: "contain" }}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              style={{ width: "50%",borderRadius:"50%",border:"3px solid black", backgroundColor:"#f5f5f5" }}
              src={photo2}
            />
          </div>
        </div>
      </section>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 className="text-4xl font-semibold">Time Line</h1>
      </div>
      <TimeLine />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 className="text-4xl font-semibold">Skills and Technologies</h1>
      </div>
      <Skills />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 className="text-4xl font-semibold">Projects</h1>
      </div>
      <Projects />
      <br />
      <Contact/>
    </div>
  );
};

export default Home;
