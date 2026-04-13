import { FaEnvelope, FaFilePdf } from "react-icons/fa";
import Container from "./Container";

const MAILTO = "mailto:ddeniz.ozturkk@gmail.com";
const CV_PATH = `${import.meta.env.BASE_URL}cv.pdf`;

export default function Footer({ content }) {
  const iconLinkClass =
    "inline-flex items-center justify-center rounded-full p-4 text-[#171043] transition-colors " +
    "hover:bg-[#171043]/10 hover:text-[#4731D3] " +
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171043] " +
    "dark:text-[#BAB2E7] dark:hover:bg-white/10 dark:hover:text-white " +
    "dark:focus-visible:outline-[#BAB2E7]";

  return (
    <>
      <section className="font-inter text-center py-20 bg-[#CBF281] dark:bg-[#252128]">
        <Container>
          <p className="text-2xl font-light leading-snug text-[#171043]/90 dark:text-[#E5E7EB] max-w-2xl mx-auto">
            {content.desc}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-12">
            <a
              href={MAILTO}
              className={iconLinkClass}
              aria-label={content.emailAria}
            >
              <FaEnvelope className="w-9 h-9 sm:w-10 sm:h-10" aria-hidden />
            </a>
            <a
              href={CV_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className={iconLinkClass}
              aria-label={content.cvAria}
            >
              <FaFilePdf className="w-9 h-9 sm:w-10 sm:h-10" aria-hidden />
            </a>
          </div>
        </Container>
      </section>

      <footer className="font-inter text-center py-6 bg-[#4731D3] text-sm text-white dark:bg-[#171043] dark:text-[#D1D5DB]">
        <Container>
          <p>
            ©2026 · Created with VSCode and developed with Cursor, by Deniz
            Öztürk
          </p>
        </Container>
      </footer>
    </>
  );
}
