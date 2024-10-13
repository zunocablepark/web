"use client";

import { useEffect, useState } from "react";
import { GalleryItem } from "../";


const images = [
  { src: "/images/gallery/03-nose-press.jpeg", alt: "Pedro Zucki realizando um nose press no wakeboard no Zuno Cable Park em Curitiba - Paraná, Brasil" },
  { src: "/images/gallery/09-bia-wakeskate.jpg", alt: "Bia praticando wakeskate no Zuno Cable Park" },
  { src: "/images/gallery/04-top-view.jpg", alt: "Vista aérea do lago e obstáculos no Zuno Cable Park" },
  { src: "/images/gallery/05-pare-wake.jpg", alt: "Placa icônica de WAKE com obstáculos desafiadores ao fundo" },
  { src: "/images/gallery/12-glass-front-view.jpg", alt: "Impressionante vista frontal do Zuno Cable Park refletindo o céu azul de Curitiba" },
  { src: "/images/gallery/10-kid-fun.jpeg", alt: "Criança se divertindo no Zuno Cable Park em Curitiba, Paraná - Brasil" },
  { src: "/images/gallery/06-galera.jpg", alt: "Grupo animado de amigos desfrutando das atividades no Zuno Cable Park" },
  { src: "/images/gallery/07-front-view.jpg", alt: "Vista frontal do sistema BI-LEVEL no Zuno Cable Park" },
  { src: "/images/gallery/02-superman.jpg", alt: "Atleta executando a manobra SUPERMAN de tirar o fôlego no Zuno Cable Park" },
  { src: "/images/gallery/11-crew.jpeg", alt: "Equipe dedicada e amigável do Zuno Cable Park pronta para auxiliar os visitantes" },
  { src: "/images/gallery/00-top-view-woods.jpg", alt: "Vista aérea da exuberante área verde que cerca o Zuno Cable Park em Curitiba" },
  { src: "/images/gallery/01-bia-control.jpg", alt: "Bia e Pedro Zucki, os experientes proprietários, gerenciando o Zuno Cable Park com paixão" },
];

const GallerySection: React.FC = () => {
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
