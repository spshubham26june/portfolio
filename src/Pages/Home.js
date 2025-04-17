import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails, techStackDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
  } = techStackDetails;

  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(h11.current, {
      y: "-100%", // FROM TOP
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    })
      .from(
        h12.current,
        {
          y: "-100%",
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "<0.3"
      )
      .from(
        h13.current,
        {
          y: "-100%",
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "<0.3"
      )
      .from(
        myimageref.current,
        {
          opacity: 0,
          scale: 0.8,
          duration: 1.5,
          ease: "power3.out",
        },
        "<0.2"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex flex-col gap-16 justify-between items-center pb-32 -mt-16">
      {/* Blinking animation style */}
      <style>
        {`
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0.3; }
            100% { opacity: 1; }
          }

          .blink {
            animation: blink 1.5s infinite ease-in-out;
          }

          .delay-0 { animation-delay: 0s; }
          .delay-1 { animation-delay: 0.3s; }
          .delay-2 { animation-delay: 0.6s; }
          .delay-3 { animation-delay: 0.9s; }
          .delay-4 { animation-delay: 1.2s; }
          .delay-5 { animation-delay: 1.5s; }
        `}
      </style>

      {/* Intro Section */}
      <div className="w-full md:flex justify-between items-center">
        <div>
          <h1
            ref={h11}
            className="text-xl md:text-3xl xl:text-4xl text-purple-600 font-bold leading-snug"
          >
            Hi, I am Shubham Patil.
          </h1>

          <h1
            ref={h12}
            className="text-xl md:text-3xl xl:text-4xl bg-clip-text bg-gradient text-transparent font-bold leading-snug"
          >
            {name}
          </h1>

          <h2
            ref={h13}
            className="text-lg md:text-2xl xl:text-3xl text-dark-heading dark:text-light-heading font-semibold leading-snug"
          >
            {tagline}
          </h2>

          <p className="mt-4 text-base max-w-xl text-content">
            I am a Front-End Developer passionate about creating engaging user experiences with clean and maintainable code. I love working with modern web technologies and turning ideas into reality.
          </p>

          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-blue-800 dark:text-blue-300 py-2 lg:max-w-3xl">
            Recent technologies I have been utilizing
          </h2>

          <section className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-6 pt-6">
            <img src={html} title="HTML" alt="HTML" className="w-12 sm:w-16 md:w-20 blink delay-0" />
            <img src={css} title="CSS" alt="CSS" className="w-12 sm:w-16 md:w-20 blink delay-1" />
            <img src={js} title="JavaScript" alt="JavaScript" className="w-12 sm:w-16 md:w-20 blink delay-2" />
            <img src={bootstrap} title="Bootstrap" alt="Bootstrap" className="w-12 sm:w-16 md:w-20 blink delay-3" />
            <img src={react} title="React" alt="React" className="w-12 sm:w-16 md:w-20 blink delay-4" />
            <img src={redux} title="Redux" alt="Redux" className="w-12 sm:w-16 md:w-20 blink delay-5" />
          </section>
        </div>

        <div className="mt-5 md:mt-0">
          <img
            ref={myimageref}
            className="w-1/2 md:ml-auto rounded-2xl shadow-lg"
            src={img}
            alt="Shubham Patil"
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
