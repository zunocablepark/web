"use client";

import { useEffect, useState } from "react";
import { GalleryItem } from "../";


const images = [
  { src: "/images/gallery/03-nose-press.jpeg", alt: "Pedro Zucki realizando um nose press no wakeboard no Zuno Cable Park em Curitiba - Paraná, Brasil." },
  { src: "/images/gallery/09-bia-wakeskate.jpg", alt: "Bia praticando wakeskate no Zuno Cable Park." },
  { src: "/images/gallery/04-top-view.jpg", alt: "Vista aérea do lago e obstáculos no Zuno Cable Park." },
  { src: "/images/gallery/05-pare-wake.jpg", alt: "Placa escrita WAKE e obstáculos ao fundo." },
  { src: "/images/gallery/12-glass-front-view.jpg", alt: "Linda vista frontal do Zuno Cable Park com o reflexo do céu." },
  { src: "/images/gallery/10-kid-fun.jpeg", alt: "Criança se divertindo no Zuno Cable Park em Curitiba, Paraná - Brasil." },
  { src: "/images/gallery/06-galera.jpg", alt: "Grupo de amigos no Zuno Cable Park." },
  { src: "/images/gallery/07-front-view.jpg", alt: "Vista frontal do Zuno Cable Park mostrando o BI-LEVEL." },
  { src: "/images/gallery/02-superman.jpg", alt: "Praticante de wakeboard fazendo a manobra SUPERMAN!" },
  { src: "/images/gallery/11-crew.jpeg", alt: "Equipe do Zuno Cable Park e amigos!" },
  { src: "/images/gallery/00-top-view-woods.jpg", alt: "Vista aérea das áreas verdes do Zuno Cable Park." },
  { src: "/images/gallery/01-bia-control.jpg", alt: "Bia e Pedro Zucki comandando o Zuno Cable Park!" },
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
