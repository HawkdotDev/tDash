/* eslint-disable no-undef */
const one = () => {
  return (
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
          className="h-screen w-[15%] flex flex-col justify-between p-1 border-r"
        >
          <div className="w-full flex items-center justify-start mt-[2px]">
            <img
              style={{
                borderColor: textColor,
              }}
              src={owl}
              alt="logo"
              className="w-[30px] py-1 px-[2px]"
            />
            <h1 className="bg-transparent text-2xl px-2">{dashboardName}</h1>
          </div>
          <div className="w-full h-[86%] rounded-md flex flex-col items-center justify-between overflow-hidden">
            <div className="flex flex-col w-full">
              <h1 className="hover:bg-black w-full rounded-md p-2">lund</h1>
              <h1 className="hover:bg-black w-full rounded-md p-2">lund</h1>
              <h1 className="hover:bg-black w-full rounded-md p-2">lund</h1>
              <h1 className="hover:bg-black w-full rounded-md p-2">lund</h1>
            </div>
            <div className="flex flex-col w-full p-2 rounded-md bg-red-400">
              laura
            </div>
          </div>
          <div className="w-full h-[7%] p-2 bg-blue-500 rounded-md flex items-center justify-start">
            something
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
  )
}

export default one