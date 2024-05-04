/* eslint-disable no-unused-vars */
import moon from "./assets/icons/moon.svg";
import sun from "./assets/icons/sun.svg";
import owlB from "./assets/icons/owl-b.svg";
import owlW from "./assets/icons/owl-w.svg";
import { useState } from "react";

function App() {
  const [IsLight, setIsLight] = useState(true);

  // light theme
  const lightBG = "#c4bcb2";
  const lightText = "#4e4e4e";

  // dark theme
  const darkBG = "#333333";
  const darkText = "#c4bcb2";

  const bgColor = IsLight ? darkBG : lightBG;
  const textColor = IsLight ? darkText : lightText;
  const owl = IsLight ? owlW : owlB;

  const dashboardName = "Dashboard";

  return (
    <>
      <main
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
        className="w-screen h-screen text-lg flex"
      >
        <nav
          style={{
            borderColor: textColor,
          }}
          className="h-screen w-[15%] flex p-2 border-r"
        >
          <div className="w-full h-8 flex items-center justify-start">
            <img
              style={{
                borderColor: textColor,
              }}
              src={owl}
              alt="logo"
              className="w-[40px] py-3 px-[2px]"
            />
            <h1 className="bg-transparent text-2xl px-2">{dashboardName}</h1>
          </div>
        </nav>

        <section
          style={{
            borderColor: textColor,
          }}
          className="h-screen w-[85%] flex p-2 border-b"
        >
          <div className="flex justify-end w-full">
            <button
              className="w-[35px] h-[35px] px-[1px] rounded-full"
              onClick={() => {
                setIsLight(!IsLight);
              }}
            >
              <img
                src={IsLight ? sun : moon}
                alt="logo"
                className="w-full h-full rounded-full"
              />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
