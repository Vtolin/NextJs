import React from "react";
import Image from "next/image";
import Taskbar from "../components/Taskbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <div className="max-w-[1500px] justify-center items-center mx-auto">
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
                    width={250}
                    height={250}
                    className="rounded-full object-cover border-[3px] border-white animate-slide-in-left w-[175px] h-[175px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px]"
                  />
                </div>

                <div className="text-center md:text-left text-white max-w-md">
                  <h3 className="text-xl font-semibold mb-3 animate-slide-in-left">
                    Who I Am
                  </h3>
                  <p className="text-l sm:text-lg text-gray-300 leading-relaxed animate-slide-in-up">
                    I&apos;m a junior high school student exploring photography
                    at a semi-professional level. My journey began with
                    documenting school events, and over time, it has grown into
                    a deeper passion for visual storytelling. I’ve expanded my
                    skills through street photography, creative projects, and by
                    building connections within local photography communities.
                  </p>
                </div>
              </div>
              <p className="text-l sm:text-lg text-gray-300 leading-relaxed animate-slide-in-up lg:pl-[120px] lg:pr-[70px] text-center md:text-left">
                With hands-on experience using both DSLR and mirrorless cameras,
                I’ve developed a solid understanding of camera settings,
                composition, and lighting. I now offer photography services,
                including event documentation and personal photo
                shoots—especially in cosplay photography, where I combine
                creative direction with technical skill to capture unique and
                expressive portraits. Professional Equipment DSLR & Mirrorless
                Camera Expertise
              </p>
            </div>
          </section>

          <div className="px-6 py-12 max-w-6xl mx-auto">
            <div className="flex-col md:justify-center h-[80px] md:flex">
              <h2 className="text-2xl md:text-3xl font-semibold text-white flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                <span className="md:w-[90px] md:h-[2px] md:bg-yellow-400"></span>
                What I Shot
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center ">
              {[
                { emoji: "🚄", label: "Train" },
                { emoji: "🛵", label: "Bike" },
                { emoji: "🧍", label: "Person" },
                { emoji: "🌼", label: "Macro" },
                { emoji: "🏫", label: "School" },
                { emoji: "🛣️", label: "Street" },
              ].map((item, index) => (
                <button
                  key={index}
                  className="bg-[#2b2b2b] text-white px-6 py-4 rounded-lg border-2 border-yellow-400 w-full text-lg hover:bg-yellow-400 hover:text-black transition-all font-semibold flex items-center justify-center gap-3 animate-slide-in-up"
                >
                  <span>{item.emoji}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
