import React from "react";
import Work from "./Works";

const Body = () => {
  return (
    <main className="max-w-[95%] mx-auto py-12 px-6">
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center py-5">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="h-[250px] rounded-lg w-full sm:w-[100%] bg-white mx-auto">
            {/* <Image src="" alt="image" className="w-full h-full object-cover rounded-lg" /> */}
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            I&apos;m Rajendra Pasha, also known as Pasha. I am a student at 
            SMA Triguna Utama. I started learning to code in March 2024 on <a href="https://www.freecodecamp.org" target="_blank" 
               className="text-blue-600 underline">
              freeCodeCamp
            </a>. The first programming language I learned was JavaScript 
            (after learning HTML and CSS). Currently, I am learning to become 
            a full-stack developer and plan to explore Machine Learning and 
            Software Engineering in the future.
          </p>
        </div> 
      </section>

      <Work />
    </main>
  );
};

export default Body;
