import { FaGithub, FaLinkedin } from "react-icons/fa";
import denizozturkprofile from "../assets/denizozturkprofile.jpeg";
import Container from "./Container";

export default function Landing({ content }) {
  return (
    <>
      <section className="dark:bg-[linear-gradient(to_right,_#171043_0%,_#171043_70%,_#211F0B_70%,_#211F0B_100%)] bg-[linear-gradient(to_right,_#4731D3_0%,_#4731D3_70%,_#CBF281_70%,_#CBF281_100%)] h-max font-inter">
        <Container>
          <div className="flex flex-row items-end gap-10 pb-36">
            <div className="space-y-6">
              <h1 className="font-inter text-5xl font-semibold text-[#CBF281]">
                {content.title}
              </h1>
              <p className="font-inter text-xl font-light text-white">
                {content.desc}
              </p>
              <div className="flex flex-row gap-4">
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

            <img
              src={denizozturkprofile}
              alt="deniz ozturk profile photo"
              className="rounded-xl w-80 aspect-square object-cover"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
