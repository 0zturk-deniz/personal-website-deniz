import iconJS from "../assets/JavaScript-logo.png";
import iconReact from "../assets/React-icon.png";
import iconNode from "../assets/node-icon.png";
import iconVS from "../assets/vscode-icon.png";
import iconRedux from "../assets/redux-icon.png";
import iconFigma from "../assets/figma-icon.png";
import Container from "./Container";

export default function Skills() {
  return (
    <section className="dark:bg-[#252128] w-full h-max py-20">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10">
          <h1 className="font-inter text-5xl font-semibold dark:text-[#CBF281] text-[#4731D3] pr-20">
            Skills
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-8 gap-x-32">
            {[
              { icon: iconJS, label: "JAVASCRIPT" },
              { icon: iconNode, label: "NODE" },
              { icon: iconReact, label: "REACT" },
              { icon: iconVS, label: "VS CODE" },
              { icon: iconRedux, label: "REDUX" },
              { icon: iconFigma, label: "FIGMA" },
            ].map(({ icon, label }, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-lg shadow-2xl overflow-hidden bg-white">
                  <img
                    src={icon}
                    alt={`${label.toLowerCase()} icon`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="font-inter text-xl md:text-2xl text-[#777777] dark:text-white">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
