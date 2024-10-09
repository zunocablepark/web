"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const EasterEgg = () => {
  const router = useRouter();
  const [_, setClickSequence] = useState<string[]>([]);

  const secretSequence1 = ["zone1", "zone1", "zone2", "zone2"];
  const secretSequence2 = ["zone2", "zone2", "zone1", "zone1"];

  const handleClick = (zone: string) => {
    setClickSequence((prevSequence) => {
      const newSequence = [...prevSequence, zone].slice(
        -secretSequence1.length
      );
      if (newSequence.join("") === secretSequence1.join("")) {
        router.push("/zuno-full-experience/light");
      }
      if (newSequence.join("") === secretSequence2.join("")) {
        router.push("/zuno-full-experience/dark");
      }
      return newSequence;
    });
  };

  return (
    <>
      {/* Zonas Clicáveis com Bordas Coloridas */}
      {/* Zona 1 - Canto Inferior Esquerdo */}
      <div
        onClick={() => handleClick("zone1")}
        style={{
          position: "absolute",
          bottom: "11%",
          left: "0%",
          width: "36px",
          height: "36px",
          cursor: "pointer",
          border: "2px solid green",
          borderRadius: "50%",
          opacity: "10%",
        }}
      />
      {/* Zona 2 - Canto Inferior Direito */}
      <div
        onClick={() => handleClick("zone2")}
        style={{
          position: "absolute",
          bottom: "11%",
          right: "0%",
          width: "36px",
          height: "36px",
          cursor: "pointer",
          border: "2px solid green",
          borderRadius: "50%",
          opacity: "10%",
        }}
      />
    </>
  );
};

export default EasterEgg;
