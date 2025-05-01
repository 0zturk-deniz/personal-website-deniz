export default function Projects({ content }) {
    return (
      <section className="dark:bg-[#1a210c] bg-[#CBF281] h-max py-20 px-40 font-inter">
        <h1 className="dark:text-[#CBF281] text-5xl font-semibold text-[#4731D3] mb-10">
          {content.title}
        </h1>
  
        {content.list.map((project) => (
          <div
            key={project.id}
            className="dark:bg-[#252128] bg-white w-[900px] h-[350px] rounded-xl align-center flex flex-row shadow-2xl mb-12"
          >
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="rounded-tl-xl rounded-bl-xl w-[350px] h-full object-cover"
              />
            </div>
  
            <div className="w-72 m-8">
              <p className="dark:text-[#BAB2E7] text-3xl text-[#4731D3] font-semibold">
                {project.title}
              </p>
              <p className="dark:text-white font-light text-black w-96 py-4 tracking-tight text-justify leading-snug">
                {project.desc}
              </p>
  
              <div className="flex flex-row gap-2">
                {project.tags.map((tag, index) => (
                  <p
                    key={index}
                    className="dark:bg-[#8173da] rounded-full w-[70px] h-[30px] bg-[#4731D3] text-white text-sm font-light flex items-center justify-center"
                  >
                    {tag}
                  </p>
                ))}
              </div>
  
              <div className="flex flex-row gap-8">
                <a
                  href={project.links.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-[#CBF281] block underline font-inter mt-6"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-[#CBF281] block underline font-inter mt-6"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  }
  