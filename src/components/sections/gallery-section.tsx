"use client";

import { useEffect, useState } from "react";
import { GalleryItem } from "../";


const images = [
  { src: "/images/gallery/03-nose-press.jpeg", alt: "Gallery Image 3" },
  { src: "/images/gallery/09-bia-wakeskate.jpg", alt: "Gallery Image 7" },
  { src: "/images/gallery/04-top-view.jpg", alt: "Gallery Image 6" },
  { src: "/images/gallery/05-pare-wake.jpg", alt: "Gallery Image 7" },
  { src: "/images/gallery/12-glass-front-view.jpg", alt: "Gallery Image 7" },
  { src: "/images/gallery/10-kid-fun.jpeg", alt: "Gallery Image 7" },
  { src: "/images/gallery/06-galera.jpg", alt: "Gallery Image 5" },
  { src: "/images/gallery/07-front-view.jpg", alt: "Gallery Image 7" },
  { src: "/images/gallery/02-superman.jpg", alt: "Gallery Image 4" },
  { src: "/images/gallery/11-crew.jpeg", alt: "Gallery Image 7" },
  { src: "/images/gallery/00-top-view-woods.jpg", alt: "Gallery Image 1" },
  { src: "/images/gallery/01-bia-control.jpg", alt: "Gallery Image 2" },
];

const GallerySection = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmallScreen = windowWidth < 640; 

  const imagesToRender = isSmallScreen ? images.slice(0, 5) : images;

  return (
    <section className="py-4">
      <div className="container mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 space-y-5 ">
          {imagesToRender.map((image, index) => (
            <GalleryItem key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
