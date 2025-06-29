"use client";
import React from "react";
import Taskbar from "../components/Taskbar";
import PhotoCard from "../components/PhotoCard";
import Footer from "../components/Footer";

const images = Array.from({ length: 10 }, (_, i) => ({
  src: `/photos/pict${i + 1}.jpeg`,
  alt: `Portfolio image ${i + 1}`,
}));

const Work = () => {
  return (
    <>
      <Taskbar />
      <section className="mb-16 pt-18 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Moments in Motion</h2>
          <p className="bg-gradient-to-br from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent">
            A curated collection of my favorite captures
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((img, index) => (
            <PhotoCard key={index} src={img.src} alt={img.alt} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Work;
