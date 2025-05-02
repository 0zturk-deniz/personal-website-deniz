export default function Footer ({content}) {
    return (
        <section className="font-inter text-center py-20 dark:bg-[#252128]">
            <h1 className="dark:text-[#9088ff] text-5xl font-bold text-[#4731D3]">{content.title}</h1>
            <p className="dark:text-white text-2xl font-light py-16 leading-snug">{content.desc}</p>
            <a href="mailto:ddeniz.ozturkk@gmail.com" target="_blank" className="dark:text-[#9088ff] text-xl text-[#4731D3] underline">
  {content.email}
</a>


        </section>
    )
}