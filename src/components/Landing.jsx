import { FaGithub, FaLinkedin } from "react-icons/fa";
import denizozturkprofile from "../assets/denizozturkprofile.jpeg";
import Container from "./Container";

/** Same pt and pb so hero vertical padding is symmetric; value also pins the desktop photo to the bottom padding line. */
const landingPadY =
  "pt-[calc(6rem+var(--site-header-height)/2)] pb-[calc(6rem+var(--site-header-height)/2)] md:pt-[calc(10rem+var(--site-header-height)/2)] md:pb-[calc(10rem+var(--site-header-height)/2)]";

export default function Landing({ content }) {
  return (
    <section
      className="relative h-max font-inter bg-[#4731D3] dark:bg-[#171043] md:bg-[linear-gradient(to_right,_#4731D3_0%,_#4731D3_70%,_#CBF281_70%,_#CBF281_100%)] md:dark:bg-[linear-gradient(to_right,_#171043_0%,_#171043_70%,_#211F0B_70%,_#211F0B_100%)]"
    >
      <Container>
        <div className={`relative ${landingPadY}`}>
          <div className="flex flex-col-reverse gap-10 md:flex-row md:items-end md:gap-0">
            <div className="z-10 space-y-6 text-center md:max-w-[min(100%,calc(70vw-11rem))] md:pr-4 md:text-left">
              <h1 className="font-inter text-4xl sm:text-5xl font-semibold text-[#CBF281] whitespace-pre-line">
                {content.title}
              </h1>
              <p className="font-inter text-base sm:text-lg md:text-xl font-light text-white max-w-xl mx-auto md:mx-0">
                {content.desc}
              </p>
              <div className="flex flex-row flex-wrap justify-center md:justify-start gap-4">
                <a
                  href="https://github.com/0zturk-deniz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:bg-[#252128] dark:text-white dark:border dark:border-white bg-white px-6 py-3 text-[#4731D3] font-inter rounded flex flex-row"
                >
                  <FaGithub className="text-xl" />
                  Github
                </a>
                <a
                  href="https://www.linkedin.com/in/ozturkdeniz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:bg-[#252128] dark:text-white dark:border dark:border-white bg-white px-6 py-3 text-[#4731D3] font-inter rounded flex flex-row"
                >
                  <FaLinkedin className="text-xl" />
                  Linkedin
                </a>
              </div>
            </div>

            <div className="mb-6 flex shrink-0 justify-center md:hidden">
              <img
                src={denizozturkprofile}
                alt="deniz ozturk profile photo"
                className="h-48 w-48 rounded-xl object-cover sm:h-64 sm:w-64"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Desktop: photo center on viewport 70% line (matches gradient); independent of text length */}
      <div
        className="pointer-events-none absolute left-[70%] z-20 hidden -translate-x-1/2 md:block md:bottom-[calc(10rem+var(--site-header-height)/2)]"
      >
        <div className="pointer-events-auto">
          <img
            src={denizozturkprofile}
            alt="deniz ozturk profile photo"
            className="h-64 w-64 rounded-xl object-cover shadow-lg lg:h-80 lg:w-80"
          />
        </div>
      </div>
    </section>
  );
}
