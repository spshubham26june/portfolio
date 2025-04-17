import React, { useEffect, useRef } from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;

  const containerRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  useEffect(() => {
    // Simple fade-in animations
    containerRef.current.style.opacity = 0;
    emailRef.current.style.opacity = 0;
    phoneRef.current.style.opacity = 0;

    setTimeout(() => {
      containerRef.current.style.transition = "opacity 1s ease";
      containerRef.current.style.opacity = 1;
    }, 100);

    setTimeout(() => {
      emailRef.current.style.transition = "opacity 1.2s ease";
      emailRef.current.style.opacity = 1;
    }, 400);

    setTimeout(() => {
      phoneRef.current.style.transition = "opacity 1.2s ease";
      phoneRef.current.style.opacity = 1;
    }, 700);
  }, []);

  return (
    <main
      ref={containerRef}
      className="container mx-auto max-w-4xl section text-center py-16 px-4"
    >
      {/* Inline CSS for styling */}
      <style>{`
        .gradient-text {
          background: linear-gradient(90deg, #8b5cf6, #3b82f6, #10b981, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .fade-in {
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .icon-style {
          width: 40px;
          height: 40px;
          margin-right: 10px;
          display: inline-block;
          vertical-align: middle;
        }

        .link-hover:hover {
          color: #6366f1;
          transition: color 0.3s ease;
        }

        @media (min-width: 768px) {
          .icon-style {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>

      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white">
        Get in Touch ✨
      </h1>

      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        I’m always open to discussing new opportunities or collaborations.
      </p>

      <div ref={emailRef} className="mt-10 fade-in">
        <h3 className="text-xl md:text-3xl font-semibold gradient-text">
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
            alt="Email Icon"
            className="icon-style"
          />
          <a
            href={`mailto:${email}`}
            className="link-hover hover:underline"
          >
            {email}
          </a>
        </h3>
      </div>

      <p className="text-gray-500 text-lg my-4">or</p>

      <div ref={phoneRef} className="fade-in">
        <h3 className="text-xl md:text-3xl font-semibold gradient-text">
          <img
            src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
            alt="Phone Icon"
            className="icon-style"
          />
          <a
            href={`tel:${phone}`}
            className="link-hover hover:underline"
          >
            {phone}
          </a>
        </h3>
      </div>
    </main>
  );
}

export default Contact;
