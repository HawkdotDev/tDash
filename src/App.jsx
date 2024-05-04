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

  const bgColor = IsLight ? lightBG : darkBG;
  const textColor = IsLight ? lightText : darkText;
  const owl = IsLight ? owlB : owlW;

  return (
    <>
      <main
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
        className="w-screen h-screen text-lg"
      >
        <nav
          style={{
            borderColor: textColor,
          }}
          className="w-screen relative flex px-3 border-b"
        >
          <img src={owl} alt="logo" className="w-[30px] mx-2" />
          <div className="w-full bg-transparent p-2 flex justify-center text-3xl">
            TinyDashboard
          </div>
          <button
            className="w-[35px] h-[35px] m-2 px-[1px] rounded-lg"
            onClick={() => {
              setIsLight(!IsLight);
              IsLight ? console.log("moon") : console.log("sun");
            }}
          >
            <img
              src={IsLight ? moon : sun}
              alt="logo"
              className="w-full h-full rounded-full"
            />
          </button>
        </nav>
      </main>
    </>
  );
}

export default App;
