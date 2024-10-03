import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative max-w-page w-full">
      <div className="absolute pl-0 md:pl-6 z-20">
        <h1 className="flex flex-start pl-6 md:pl-0 mb-4 sm:mb-8 pt-8 sm:pt-12 md:pt-16 text-left text-6xl sm:text-7xl md:text-8xl font-black">
          ZUNO
          <br />
          CABLE
          <br />
          PARK
          <br />
        </h1>
      </div>
      <div className="w-full h-full min-h-[400px] sm:min-h-[600px] md:min-h-[720px]">
        <Image
          className="pl-0 md:pl-6 z-10 md:clip-path-rounded-left xl:rounded-b-3xl"
          src="/images/hero.jpeg"
          alt="Wakeboarder jumping over an obstacle at Zuno Cable Park"
          width={1920}
          height={1080}
          sizes="100vh"
          style={{
            objectFit: "cover",
          }}
          priority={true}
          placeholder="blur"
          blurDataURL="/images/hero.jpeg"
        />
      </div>
    </div>
  );
};

export default HeroImage;
