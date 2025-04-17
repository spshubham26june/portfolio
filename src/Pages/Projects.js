import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  return (
    <main className="container mx-auto max-width pt-10 mb-20 px-4">
      {/* Inline Styling */}
      <style>{`
        .project-card {
          background: linear-gradient(135deg, #c084fc, #60a5fa, #34d399);
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          padding: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1f2937;
        }

        .project-description {
          margin-top: 10px;
          color: #374151;
          font-size: 1rem;
        }

        .tech-stack {
          margin-top: 12px;
          font-size: 0.9rem;
          color: #4b5563;
        }

        .project-links {
          margin-top: 16px;
        }

        .project-link {
          display: inline-block;
          margin-right: 12px;
          font-weight: 500;
          color: #2563eb;
          text-decoration: none;
        }

        .project-link:hover {
          text-decoration: underline;
          color: #1d4ed8;
        }

        @media (min-width: 768px) {
          .project-title {
            font-size: 1.75rem;
          }

          .project-description {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <section>
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center text-dark-heading dark:text-light-heading mb-10">
          Personal Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {React.Children.toArray(
            projectDetails.map(
              ({ title, image, description, techstack, previewLink, githubLink }) => (
                <div className="project-card">
                  <Project
                    title={title}
                    image={image}
                    description={description}
                    techstack={techstack}
                    previewLink={previewLink}
                    githubLink={githubLink}
                  />
                </div>
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
