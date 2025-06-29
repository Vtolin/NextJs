import Taskbar from "./components/Taskbar";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Taskbar />
      <div className="bg-[#363737] h-screen flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative mx-auto rounded-full p-[4px] bg-gradient-to-br from-yellow-100 via-yellow-300 to-white shadow-[0_0_30px_5px_rgba(255,255,255,0.5)] animate-slide-in-left">
            <Image
              src="/pfp.jpeg"
              alt="Arya >w<"
              width={300}
              height={300}
              className="rounded-full object-cover w-[200px] h-[200px] border-[3px] border-white md:w-[275px] md:h-[275px] animate-slide-in-left"
            />
          </div>
          <div>
            <p className="text-l font-semibold mb-2 bg-gradient-to-br from-white via-yellow-300 to-yellow-400 bg-clip-text text-transparent">Hello, Im</p>
            <h1 className="text-4xl font-bold mb-4 text-white animate-slide-in-up">
              Narendra Aryasatya
            </h1>
            <p className="text-xl bg-gradient-to-br from-white via-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-slide-in-up">Semi-Pro Photographer</p>
            <p className="animate-slide-in-left">Welcome to my personal website</p>
          </div>
        </div>
      </div>
    </>
  );
}
