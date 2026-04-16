import denizozturkprofile2 from "../assets/denizozturkprofile2.jpeg";
import Container from "./Container";

export default function Profile({ content }) {
  return (
    <section className="dark:bg-[#171043] h-max bg-[#4731D3] py-20 font-inter">
      <Container>
        <div className="flex flex-col">
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#CBF281] mb-10">
            {content.title}
          </h1>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 xl:gap-10 items-start">
            <div className="w-full max-w-sm mx-auto lg:mx-0 lg:w-64 lg:shrink-0 min-w-0">
              <h2 className="text-2xl text-white mb-4">{content.infoTitle}</h2>

              <div className="grid grid-cols-2 gap-x-3 gap-y-4 w-full text-sm text-white">
                <p className="text-[#CBF281] font-semibold">
                  {content.info.birthday.label}
                </p>
                <p className="font-light">{content.info.birthday.value}</p>

                <p className="text-[#CBF281] font-semibold">
                  {content.info.residency.label}
                </p>
                <p className="font-light">{content.info.residency.value}</p>

                <p className="text-[#CBF281] font-semibold">
                  {content.info.education.label}
                </p>
                <p className="font-light break-words">
                  {content.info.education.value}
                </p>
              </div>
            </div>

            <img
              src={denizozturkprofile2}
              alt="deniz ozturk profile photo"
              className="rounded-xl w-56 h-56 sm:w-64 sm:h-64 lg:w-64 lg:h-64 shrink-0 object-cover mx-auto lg:mx-0"
            />

            <div className="w-full min-w-0 flex-1 flex flex-col">
              <p className="text-2xl text-white mb-4">{content.aboutTitle}</p>
              <p className="text-sm font-light text-white text-justify hyphens-auto">
                {content.aboutDesc}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
