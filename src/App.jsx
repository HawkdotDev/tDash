/* eslint-disable no-unused-vars */
import moon from "./assets/icons/moon.svg";
import sun from "./assets/icons/sun.svg";
import owlB from "./assets/icons/owl-b.svg";
import arrow from "./assets/icons/arrowRight.svg";
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

  const dashboardName = "tDash";

  return (
    <>
      <main className="w-screen h-screen bg-slate-300 flex">
        <nav className="bg-black p-[6px] flex flex-col justify-between h-full w-20 border-l border-white">
          <div className="flex flex-col justify-between h-[65%]">
          <div className="w-full flex justify-between">
            <button
              onClick={() => {
                alert("laura");
              }}
            >
              <img
                style={{
                  borderColor: textColor,
                }}
                src={owl}
                alt="logo"
                className="w-12 p-1 px-[2px]"
              />
            </button>
            <button className="w-[50%] ml-1 h-full hover:border-[1px] border-white rounded-sm">
              <img
                style={{
                  borderColor: textColor,
                }}
                src={arrow}
                alt="logo"
                className="w-full"
              />
            </button>
          </div>
          <div className="h-[85%] flex flex-col justify-evenly items-center">
            <button
              onClick={() => {
                alert("laura");
              }}
            >
              <img
                style={{
                  borderColor: textColor,
                }}
                src={owl}
                alt="logo"
                className="w-12 p-1 px-[2px]"
              />
            </button>
            <button
              onClick={() => {
                alert("laura");
              }}
            >
              <img
                style={{
                  borderColor: textColor,
                }}
                src={owl}
                alt="logo"
                className="w-12 p-1 px-[2px]"
              />
            </button>
            <button
              onClick={() => {
                alert("laura");
              }}
            >
              <img
                style={{
                  borderColor: textColor,
                }}
                src={owl}
                alt="logo"
                className="w-12 p-1 px-[2px]"
              />
            </button>
            <button
              onClick={() => {
                alert("laura");
              }}
            >
              <img
                style={{
                  borderColor: textColor,
                }}
                src={owl}
                alt="logo"
                className="w-12 p-1 px-[2px]"
              />
            </button>
          </div>
          </div>
          <div className="bg-blue-300 text-center">
            <button
              onClick={() => {
                alert("laura");
              }}
            >
              <img
                style={{
                  borderColor: textColor,
                }}
                src={owl}
                alt="logo"
                className="w-12 p-1 px-[2px]"
              />
            </button>
          </div>
        </nav>
        <aside className="w-full h-full bg-slate-500 p-2">laura</aside>
      </main>
    </>
  );
}

export default App;
