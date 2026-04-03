import { useState } from "react";
import Container from "./Container";

export default function Projects() {
  const projects = [
    {
      id: "personal-site",
      title: "Personal Website",
      subtitle: "Portfolio & personal branding website",
      techStack: ["React", "Vite", "Tailwind CSS"],
      features: [
        "Single-page portfolio with smooth scrolling layout.",
        "Dark/Light mode toggle with local storage.",
        "Multi-language support (TR / EN) with dynamic content.",
      ],
      challenges: [
        "Designing a layout that works well on all screen sizes.",
        "Keeping the design minimal while still showing enough information.",
      ],
      learnings: [
        "Improved skills in responsive UI design.",
        "Learned how to organize content for personal branding.",
      ],
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      id: "eldes",
      title: "Eldes Website",
      subtitle: "Corporate marketing website",
      description: "",
      techStack: ["React", "Tailwind CSS"],
      features: [
        "Marketing-focused landing pages for product and solutions.",
        "Reusable component structure for sections and call-to-actions.",
        "SEO-friendly, accessible and fast-loading pages.",
      ],
      challenges: [
        "Balancing corporate brand guidelines with modern UI patterns.",
        "Managing content-heavy sections without overwhelming the user.",
      ],
      learnings: [
        "Experience working with real product copy and brand rules.",
        "Stronger understanding of typography and spacing in marketing sites.",
      ],
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      id: "ecommerce",
      title: "E-commerce Web App",
      subtitle: "Modern online store experience",
      description: "",
      techStack: ["React", "Vite", "Tailwind CSS"],
      features: [
        "Product listing and detail pages optimized for conversions.",
        "Shopping cart and checkout flow designed for a smooth experience.",
        "Responsive layout that works well across mobile and desktop.",
      ],
      challenges: [
        "Designing flows that stay simple while handling many edge cases.",
        "Keeping performance high even with image-heavy pages.",
      ],
      learnings: [
        "Deeper understanding of e-commerce UX patterns.",
        "Improved skills in structuring data-heavy interfaces.",
      ],
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      id: "baulinx",
      title: "Baulinx Mobile Development",
      subtitle: "Mobile app for construction / project management",
      description:
        "A comprehensive mobile application developed for the construction industry to streamline project management and resource tracking. I led the mobile development process from scratch, taking the product from a web-only service to a fully functional mobile experience ready for the global market.",
      techStack: ["React Native", "TypeScript"],
      features: [
        "Mobile-first flows for managing tasks and project data.",
        "Simple, focused navigation optimized for on-the-go usage.",
        "Reusable UI components shared across multiple screens.",
      ],
      challenges: [
        "Designing flows that are easy to use in the field.",
        "Adapting layouts to different mobile screen sizes.",
      ],
      learnings: [
        "Gained experience in mobile design patterns and navigation.",
        "Improved thinking about offline / low-connection scenarios.",
      ],
      screenshots: [
        "/screenshots/baulinx-1.png",
        "/screenshots/baulinx-2.png",
        "/screenshots/baulinx-3.png",
        "/screenshots/baulinx-4.png",
        "/screenshots/baulinx-5.png",
      ],
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      id: "worknova",
      title: "Worknova Mobile Development",
      subtitle: "Mobile app for HR / work management",
      description:
        "The mobile counterpart of a professional networking and job matching platform. My role was to translate the core web functionalities into a seamless, high-performance mobile app focused on user engagement and real-time communication.",
      techStack: ["React Native", "Redux"],
      features: [
        "Screens for managing jobs, candidates, and workflows.",
        "Clean UI with clear hierarchy for dense information.",
        "Global state management tuned for mobile performance.",
      ],
      challenges: [
        "Presenting a lot of data without cluttering the screen.",
        "Keeping interactions quick and simple for busy users.",
      ],
      learnings: [
        "Deeper understanding of state management in mobile apps.",
        "Experience designing for productivity-focused tools.",
      ],
      screenshots: [],
      links: {
        live: "#",
        github: "#",
      },
    },
  ];

  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const activeProject =
    projects.find((project) => project.id === activeProjectId) ?? projects[0];

  return (
    <section className="dark:bg-[#252128] bg-white w-full h-max py-20">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-inter text-4xl sm:text-5xl font-semibold text-[#4731D3] dark:text-[#CBF281]">
              Projects
            </h1>
            <p className="font-inter text-base sm:text-lg text-[#555555] dark:text-[#E4E4E4] max-w-2xl">
              A selection of projects I&apos;ve worked on so far. Use the tabs
              to explore what I built, the challenges I faced, and what I
              learned from each experience.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 border-b border-[#E5E7EB] dark:border-[#3A3A3A] pb-4">
            {projects.map((project) => {
              const isActive = project.id === activeProjectId;
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveProjectId(project.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${
                      isActive
                        ? "bg-[#4731D3] text-white dark:bg-[#CBF281] dark:text-[#171043]"
                        : "bg-[#F3F4FF] text-[#4731D3] hover:bg-[#E0E3FF] dark:bg-[#2F2B3A] dark:text-[#E4E4E4] dark:hover:bg-[#3A3548]"
                    }`}
                >
                  {project.title}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="space-y-2">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#111827] dark:text-white">
                    {activeProject.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#6B7280] dark:text-[#D1D5DB] mt-1">
                    {activeProject.subtitle}
                  </p>
                </div>

                {activeProject.description && (
                  <p className="text-sm sm:text-base text-[#4B5563] dark:text-[#E5E7EB] leading-relaxed">
                    {activeProject.description}
                  </p>
                )}
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[#9CA3AF] dark:text-[#9CA3AF] mb-2">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-[#EEF2FF] text-[#3730A3] px-3 py-1 text-xs font-medium dark:bg-[#1F2937] dark:text-[#E5E7EB]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#111827] dark:text-white mb-2">
                  Features
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-[#374151] dark:text-[#E5E7EB]">
                  {activeProject.features.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#111827] dark:text-white mb-2">
                  Challenges
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-[#374151] dark:text-[#E5E7EB]">
                  {activeProject.challenges.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#111827] dark:text-white mb-2">
                  Learnings
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-[#374151] dark:text-[#E5E7EB]">
                  {activeProject.learnings.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#111827] dark:text-white mb-2">
                  Links
                </h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={activeProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium bg-[#4731D3] text-white hover:bg-[#3A27B8] transition-colors dark:bg-[#CBF281] dark:text-[#171043] dark:hover:bg-[#B0D86C]"
                  >
                    Live
                  </a>
                  <a
                    href={activeProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium border border-[#D1D5DB] text-[#111827] hover:bg-[#F9FAFB] transition-colors dark:border-[#4B5563] dark:text-[#E5E7EB] dark:hover:bg-[#111827]"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>

          {Array.isArray(activeProject.screenshots) &&
            activeProject.screenshots.length > 0 && (
              <div className="w-full border-t border-[#E5E7EB] dark:border-[#3A3A3A] pt-8">
                <h3 className="text-base font-semibold text-[#111827] dark:text-white mb-4">
                  Screenshots
                </h3>
                <div className="flex flex-wrap gap-3 sm:gap-4 items-end justify-start">
                  {activeProject.screenshots.slice(0, 5).map((src) => (
                    <div
                      key={src}
                      className="inline-flex max-w-full rounded-xl border border-[#E5E7EB] dark:border-[#374151] bg-[#F9FAFB] dark:bg-[#111827] overflow-hidden shadow-sm"
                    >
                      <img
                        src={src}
                        alt={`${activeProject.title} screenshot`}
                        className="block max-h-[200px] sm:max-h-[260px] lg:max-h-[300px] w-auto h-auto max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
      </Container>
    </section>
  );
}
