import denizozturkprofile2 from "../assets/denizozturkprofile2.jpeg";
import Container from "./Container";

export default function Profile({ content }) {
  return (
    <section className="dark:bg-[#171043] h-max bg-[#4731D3] py-20 font-inter">
      <Container>
        <div className="flex flex-col">
          <h1 className="text-5xl font-semibold text-[#CBF281] mb-10">
            {content.title}
          </h1>

          <div className="flex flex-col lg:flex-row gap-8 justify-between items-start">
            <div className="flex flex-col">
              <h2 className="text-2xl text-white mb-4">{content.infoTitle}</h2>

              <div className="grid grid-cols-2 gap-y-4 w-48 text-sm text-white">
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

                <p className="text-[#CBF281] font-semibold">
                  {content.info.role.label}
                </p>
                <p className="font-light">{content.info.role.value}</p>
              </div>
            </div>

            <img
              src={denizozturkprofile2}
              alt="deniz ozturk profile photo"
              className="rounded-xl w-72 aspect-square flex-shrink-0 object-cover"
            />

            <div className="w-full lg:w-72 flex flex-col justify-start">
              <p className="text-2xl text-white mb-4">{content.aboutTitle}</p>
              <p className="font-light text-white text-justify leading-relaxed">
                {content.aboutDesc}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
