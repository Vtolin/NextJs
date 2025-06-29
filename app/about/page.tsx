import React from "react";
import Image from "next/image";
import Taskbar from "../components/Taskbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <main className="md:max-w-[80%] w-[100%] mx-auto py-12 px-6">
        <Taskbar />
        <section className="mb-16">
          <div className="bg-[#363737] min-h-[80vh] flex flex-col justify-center items-center mt-[30px] rounded-2xl border border-gray-300 px-6 py-10">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">
              About Me
            </h2>

            <div className="flex flex-col lg:flex-row items-center gap-10">
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
                <h3 className="text-xl font-semibold mb-3 animate-slide-in-left">
                  Who I Am
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed animate-slide-in-up">
                  I&apos;m a junior high school student exploring photography at
                  a semi-professional level. I practice by building networks,
                  doing street photography, and documenting school events.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="px-6 py-12 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-white flex flex-col md:justify-normal  md:text-left md:flex-row items-center justify-center gap-4 text-center mt-[-60px] mb-[20px]">
            <span className="md:w-[90px] md:h-[2px] md:bg-yellow-400"></span>
            Services
          </h2>
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-white text-center mb-[30px]">
              Personal Photo Shoots
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-6 place-items-center">
              <Image
                src="/serpicts/pershot.jpeg"
                alt="Personal Shoot 1"
                width={400}
                height={250}
                className="rounded-lg border-2 border-white object-cover w-[90%] sm:w-[350px] h-auto max-h-[300px] animate-slide-in-left hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/serpicts/pershot2.jpeg"
                alt="Personal Shoot 2"
                width={400}
                height={250}
                className="rounded-lg border-2 border-white object-cover w-[90%] sm:w-[350px] h-auto max-h-[300px] animate-slide-in-left hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/serpicts/pershot3.jpeg"
                alt="Personal Shoot 3"
                width={400}
                height={250}
                className="rounded-lg border-2 border-white object-cover w-[90%] sm:w-[350px] h-auto max-h-[300px] animate-slide-in-left hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-[30px] mt-[-20px] text-white text-center">
              Event Documentations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4 gap-4 place-items-center">
              <Image
                src="/serpicts/doshot.jpeg"
                alt="Event 1"
                width={400}
                height={250}
                className="rounded-lg border-2 border-white object-cover w-[90%] sm:w-[350px] h-auto max-h-[300px] animate-slide-in-left hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/serpicts/doshot2.jpeg"
                alt="Event 2"
                width={400}
                height={250}
                className="rounded-lg border-2 border-white object-cover w-[90%] sm:w-[350px] h-auto max-h-[300px] animate-slide-in-left hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/serpicts/doshot3.jpeg"
                alt="Event 2"
                width={400}
                height={250}
                className="rounded-lg border-2 border-white object-cover w-[90%] sm:w-[350px] h-auto max-h-[300px] animate-slide-in-left hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-[30px] text-white text-center">
              Outdoor
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4 gap-4 place-items-center mt-[30px]">
              <Image
                src="/serpicts/out.jpeg"
                alt="Outdoor"
                width={400}
                height={250}
                className="rounded-lg border-2 border-white object-cover w-[90%] sm:w-[350px] h-auto max-h-[300px] animate-slide-in-left hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/serpicts/out2.jpeg"
                alt="Outdoor2"
                width={400}
                height={250}
                className="rounded-lg border-2 border-white object-cover w-[90%] sm:w-[350px] h-auto max-h-[300px] animate-slide-in-left hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/serpicts/out3.jpeg"
                alt="Outdoor3"
                width={400}
                height={250}
                className="rounded-lg border-2 border-white object-cover w-[90%] sm:w-[350px] h-auto max-h-[300px] animate-slide-in-left hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
