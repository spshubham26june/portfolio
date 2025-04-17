import React from "react";
import Work from "../Components/Work";
import { workDetails, eduDetails } from "../Details";

function About() {
  // Elegant gradient from soft violet to blue
  const gradient =
    "bg-[radial-gradient(circle_at_top_left,_#e0e7ff,_#c7d2fe,_#93c5fd)]";

  return (
    <main className="container mx-auto px-4 max-w-6xl pt-10 pb-20">
      {/* Inline CSS for extra styling */}
      <style>{`
        .custom-card {
          background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 50%, #93c5fd 100%);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
        }

        .custom-card:hover {
          transform: scale(1.03);
          transition: transform 0.3s ease;
        }

        .section-title {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
      `}</style>

      {/* Work Experience Section */}
      <section className="mb-20">
        <h1 className="section-title text-3xl md:text-4xl xl:text-5xl font-extrabold text-dark-heading dark:text-light-heading mb-8 text-center md:text-left">
          Work Experience
        </h1>
        <div className="space-y-8">
          {React.Children.toArray(
            workDetails.map(({ Position, Company, Location, Type, Duration }) => (
              <div className="custom-card p-6 rounded-2xl text-gray-800 dark:text-white transition-all duration-300">
                <Work
                  position={Position}
                  company={Company}
                  location={Location}
                  type={Type}
                  duration={Duration}
                />
              </div>
            ))
          )}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h1 className="section-title text-3xl md:text-4xl xl:text-5xl font-extrabold text-dark-heading dark:text-light-heading mb-8 text-center md:text-left">
          Education
        </h1>
        <div className="space-y-8">
          {React.Children.toArray(
            eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
              <div className="custom-card p-6 rounded-2xl text-gray-800 dark:text-white transition-all duration-300">
                <Work
                  position={Position}
                  company={Company}
                  location={Location}
                  type={Type}
                  duration={Duration}
                />
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

export default About;
