"use client";

import { useState, useEffect, useRef } from "react";

const MapSection = () => {
  const [isMapInteractive, setIsMapInteractive] = useState(false);
  const mapSectionRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mapSectionRef.current &&
      !mapSectionRef.current.contains(event.target as Node)
    ) {
      setIsMapInteractive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <section
      ref={mapSectionRef}
      className="relative w-full flex-col justify-center items-center border-y-4 border-green-600"
    >
      <div
        className={`absolute bg-transparent cursor-pointer w-full h-full z-10 ${
          isMapInteractive ? "pointer-events-none" : ""
        }`}
        onClick={() => setIsMapInteractive(true)}
      ></div>
      <iframe
        className="w-full h-[480px] border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.549564671862!2d-49.00622312408106!3d-25.285733627200347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dc95b00b45673b%3A0xdb5f6eb7fd294251!2sZuno%20cablepark!5e0!3m2!1spt-BR!2sbr!4v1719981458191!5m2!1spt-BR!2sbr"
        loading="lazy"
        allowFullScreen={true}
      />
    </section>
  );
};

export default MapSection;
