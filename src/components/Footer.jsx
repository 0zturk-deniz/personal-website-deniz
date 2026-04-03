import Container from "./Container";

export default function Footer({ content }) {
  return (
    <>
      <section className="font-inter text-center py-20 dark:bg-[#252128] bg-white">
        <Container>
          <h1 className="dark:text-[#9088ff] text-5xl font-bold text-[#4731D3]">
            {content.title}
          </h1>
          <p className="dark:text-white text-2xl font-light py-16 leading-snug">
            {content.desc}
          </p>
          <a
            href="mailto:ddeniz.ozturkk@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-[#9088ff] text-xl text-[#4731D3] underline"
          >
            {content.email}
          </a>
        </Container>
      </section>

      <footer className="font-inter text-center py-6 dark:bg-[#171043] bg-[#F9FAFB] text-sm text-[#6B7280] dark:text-[#D1D5DB]">
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
