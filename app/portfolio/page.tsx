"use client";
import React from "react";
import Taskbar from "../components/Taskbar";
import PhotoCard from "../components/PhotoCard";
import Footer from "../components/Footer";

const categorizedImages = {
  Street: [
    { src: "/serpicts/pict5.jpeg", alt: "Street" },
    { src: "/photos/street1.jpeg", alt: "Street 1" },
    { src: "/photos/street2.jpeg", alt: "Street 2" },
    { src: "/photos/street3.jpeg", alt: "Street 3" },
  ],
  Train: [
    { src: "/serpicts/pict6.jpeg", alt: "Train 1" },
    { src: "/photos/train1.jpeg", alt: "Train 2" },
    { src: "/photos/train2.jpg", alt: "Train 3" },
    { src: "/photos/train3.jpg", alt: "Train 4" },
    { src: "/photos/train4.jpg", alt: "Train 5" },
  ],
    macro: [
    { src: "/serpicts/pict3.jpeg", alt: "macro" },
    { src: "/photos/macro1.jpeg", alt: "macro" },
    { src: "/photos/macro2.jpeg", alt: "macro" },
  ],
  bike: [
    { src: "/serpicts/pict1.jpeg", alt: "bike" },
    { src: "/photos/bike1.jpeg", alt: "bike" },
  ],
};

export default function Work() {
  return (
    <>
      <div className="max-w-[1500px] mx-auto justify-center items-center">
        <Taskbar />
        <section className="mb-16 pt-18 px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Moments in Motion
            </h2>
            <p className="bg-gradient-to-br from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent">
              A curated collection of my favorite captures
            </p>
          </div>

          {Object.entries(categorizedImages).map(([category, photos]) => (
            <div key={category} className="mb-16">
              <h3 className="text-2xl font-bold text-white border-l-4 border-yellow-400 pl-4 mb-6">
                {category}
              </h3>
              <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 place-items-center">
                {photos.map((photo, index) => (
                  <PhotoCard key={index} src={photo.src} alt={photo.alt} />
                ))}
              </div>
            </div>
          ))}
        </section>
        <Footer />
      </div>
    </>
  );
}
