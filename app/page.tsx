import Taskbar from "./components/components/Taskbar";
import Btn from "./components/components/btns/Btn";
import Body from "./components/components/Body";

export default function Home() {
  return (
    <>
    <div className="bg-gradient-to-b from-[#1e1b4b] to-[#312e81] h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center my-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Hi, I'm Rajendra Pasha
      </h1>
      <p className="text-center font-sans text-white">A junior Full Stack developer</p>
      <Btn />
    </div>
    <div>      
      <Body />
      <Taskbar />
    </div>
    </>
  );
}