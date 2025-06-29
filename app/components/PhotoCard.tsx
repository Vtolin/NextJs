import Image from "next/image";

export default function PhotoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="w-full h-auto object-cover"
      />
    </div>
  );
}
