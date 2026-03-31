import Container from "./Container";

export default function Projects({ content }) {
  console.log("Projects content:", content);

  if (!content) return null;

  return (
    <section className="dark:bg-[#1a210c] bg-[#CBF281] h-max py-20 font-inter">
      <Container>
        <h1 className="dark:text-[#CBF281] text-5xl font-semibold text-[#4731D3] mb-10">
          {content.title}
        </h1>

        {content.list.map((project) => (
          <div
            key={project.id}
            className="dark:bg-[#252128] bg-white w-full max-w-4xl rounded-xl flex flex-col lg:flex-row shadow-2xl mb-12 overflow-hidden mx-auto"
          >
            <div className="w-full lg:w-[350px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 sm:h-72 lg:h-full object-cover"
              />
            </div>

            <div className="flex-1 p-6 sm:p-8">
              <p className="dark:text-[#BAB2E7] text-2xl lg:text-3xl text-[#4731D3] font-semibold">
                {project.title}
              </p>
              <p className="dark:text-white font-light text-black py-4 tracking-tight text-sm sm:text-base leading-relaxed text-justify">
                {project.desc}
              </p>

              <div className="flex flex-row flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <p
                    key={index}
                    className="dark:bg-[#8173da] rounded-full px-4 py-1 bg-[#4731D3] text-white text-xs sm:text-sm font-light flex items-center justify-center"
                  >
                    {tag}
                  </p>
                ))}
              </div>

              <div className="flex flex-row flex-wrap gap-6">
                <a
                  href={project.links.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-[#CBF281] underline font-inter mt-2"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-[#CBF281] underline font-inter mt-2"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
