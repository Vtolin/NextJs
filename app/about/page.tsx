import React from "react";
import Image from "next/image";
import Taskbar from "../components/Taskbar";

const AboutPage = () => {
  return (
    <main className="max-w-[95%] mx-auto py-12 px-6">
      <Taskbar />
      <section className="mb-16">
        <div className="bg-[#363737] min-h-[80vh] flex flex-col justify-center items-center mt-[30px] rounded-2xl border border-gray-300 px-6 py-10">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/pfp.jpeg"
                alt="Arya >w<"
                width={300}
                height={300}
                className="rounded-full object-cover border-[3px] border-white animate-slide-in-left w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]"
              />
            </div>

            <div className="text-center md:text-left text-white max-w-md">
              <h3 className="text-xl font-semibold mb-3 animate-slide-in-left">Who I Am</h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed animate-slide-in-up">
                I&apos;m a junior high school student exploring photography at a
                semi-professional level. I practice by building networks,
                doing street photography, and documenting school events.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <h1 className="text-3xl font-bold">Services</h1>

      </div>
    </main>
  );
};

export default AboutPage;
