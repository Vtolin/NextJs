import React from "react";
import Image from "next/image";
import Taskbar from "../components/Taskbar";

const Body = () => {
  return (
    <main className="max-w-[95%] mx-auto py-12 px-6">
    <Taskbar />
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center py-5">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-white mx-auto rounded-lg">
            <Image
              src="/pfp.jpeg"
              alt="Arya >w<"
              width={400}
              height={320}
              style={{ objectFit: "cover", width: "400px", height: "320px" }}
              className="rounded-lg  w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">Who I Am</h3>
            <p className="text-lg text-gray-400 leading-relaxed">
            I&apos;m a junior high school student exploring photography at a semi-professional level. 
            I practice by building networks, doing street photography, and documenting school events.
          </p>
          </div>
        </div> 
      </section>
    </main>
  );
};

export default Body;
