import { useEffect, useMemo, useState } from "react";
import Container from "./Container";

function isPlaceholderHref(href) {
  if (href == null || typeof href !== "string") return true;
  const t = href.trim();
  return t === "" || t === "#";
}

function ProjectLinkPill({ href, children, variant }) {
  const disabled = isPlaceholderHref(href);
  const primary =
    "inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium bg-[#4731D3] text-white dark:bg-[#CBF281] dark:text-[#171043]";
  const primaryInteractive =
    "hover:bg-[#3A27B8] transition-colors dark:hover:bg-[#B0D86C]";
  const outline =
    "inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium border border-[#D1D5DB] text-[#111827] dark:border-[#4B5563] dark:text-[#E5E7EB]";
  const outlineInteractive =
    "hover:bg-[#F9FAFB] transition-colors dark:hover:bg-[#111827]";
  const base = variant === "primary" ? primary : outline;
  const interactive =
    variant === "primary" ? primaryInteractive : outlineInteractive;

  if (disabled) {
    return (
      <span
        className={`${base} opacity-50 cursor-not-allowed`}
        aria-disabled="true"
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${interactive}`}
    >
      {children}
    </a>
  );
}

export default function Projects({ content }) {
  const items = useMemo(() => content?.items ?? [], [content]);
  const labels = content?.labels ?? {};

  const [activeProjectId, setActiveProjectId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (!items.length) return;
    setActiveProjectId((prev) =>
      items.some((p) => p.id === prev) ? prev : items[0].id
    );
  }, [items]);

  if (!content || !items.length) return null;

  const activeProject =
    items.find((p) => p.id === activeProjectId) ?? items[0];

  return (
    <section className="dark:bg-[#252128] bg-white w-full h-max py-20">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-inter text-4xl sm:text-5xl font-semibold text-[#4731D3] dark:text-[#CBF281]">
              {content.title}
            </h1>
            <p className="font-inter text-base sm:text-lg text-[#555555] dark:text-[#E4E4E4] max-w-2xl">
              {content.intro}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 border-b border-[#E5E7EB] dark:border-[#3A3A3A] pb-4">
            {items.map((project) => {
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

                {activeProject.description ? (
                  <p className="text-sm sm:text-base text-[#4B5563] dark:text-[#E5E7EB] leading-relaxed">
                    {activeProject.description}
                  </p>
                ) : null}
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[#9CA3AF] dark:text-[#9CA3AF] mb-2">
                  {labels.techStack}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(activeProject.techStack ?? []).map((tech) => (
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
                  {labels.features}
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-[#374151] dark:text-[#E5E7EB]">
                  {(activeProject.features ?? []).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#111827] dark:text-white mb-2">
                  {labels.challenges}
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-[#374151] dark:text-[#E5E7EB]">
                  {(activeProject.challenges ?? []).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {activeProject.disclaimer ? (
                  <p className="mt-3 text-xs sm:text-sm italic text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
                    {activeProject.disclaimer}
                  </p>
                ) : null}
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#111827] dark:text-white mb-2">
                  {labels.learnings}
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-[#374151] dark:text-[#E5E7EB]">
                  {(activeProject.learnings ?? []).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#111827] dark:text-white mb-2">
                  {labels.links}
                </h3>
                <div className="flex flex-wrap gap-3">
                  <ProjectLinkPill
                    href={activeProject.links?.live}
                    variant="primary"
                  >
                    {labels.live}
                  </ProjectLinkPill>
                  <ProjectLinkPill
                    href={activeProject.links?.github}
                    variant="outline"
                  >
                    {labels.github}
                  </ProjectLinkPill>
                </div>
              </div>
            </div>
          </div>

          {Array.isArray(activeProject.screenshots) &&
            activeProject.screenshots.length > 0 && (
              <div className="w-full border-t border-[#E5E7EB] dark:border-[#3A3A3A] pt-8">
                <h3 className="text-base font-semibold text-[#111827] dark:text-white mb-4">
                  {labels.screenshots}
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
