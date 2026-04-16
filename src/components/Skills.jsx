import iconJS from "../assets/JavaScript-logo.png";
import iconReact from "../assets/React-icon.png";
import iconNode from "../assets/node-icon.png";
import iconVS from "../assets/vscode-icon.png";
import iconRedux from "../assets/redux-icon.png";
import iconFigma from "../assets/figma-icon.png";
import iconCursor from "../assets/cursor-icon.png";
import iconUnity from "../assets/unity-icon.png";
import iconExpo from "../assets/expo-icon.png";
import Container from "./Container";

export default function Skills() {
  return (
    <section className="dark:bg-[#252128] w-full h-max py-20">
      <Container>
        <div className="flex flex-col gap-10 w-full min-w-0">
          <h1 className="font-inter text-4xl sm:text-5xl font-semibold dark:text-[#CBF281] text-[#4731D3]">
            Skills
          </h1>

          <div className="grid w-full min-w-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10">
            {[
              { icon: iconJS, label: "JAVASCRIPT" },
              { icon: iconNode, label: "NODE" },
              { icon: iconReact, label: "REACT" },
              { icon: iconVS, label: "VS CODE" },
              { icon: iconRedux, label: "REDUX" },
              { icon: iconFigma, label: "FIGMA" },
              { icon: iconCursor, label: "CURSOR" },
              { icon: iconUnity, label: "UNITY" },
              { icon: iconExpo, label: "EXPO" },
            ].map(({ icon, label }, index) => (
              <div
                key={index}
                className="flex items-center gap-4 sm:gap-5 md:gap-6 w-full min-w-0"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 shrink-0 rounded-lg shadow-2xl overflow-hidden bg-white">
                  <img
                    src={icon}
                    alt={`${label.toLowerCase()} icon`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="font-inter text-base sm:text-lg md:text-xl lg:text-2xl text-[#777777] dark:text-white min-w-0">
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
