import { AspectRatio } from "../ui";

const HeroVideo: React.FC = () => {
  return (
    <AspectRatio ratio={16 / 9} className="max-w-page mx-auto pl-0">
      <video
        className="w-full h-full object-cover rounded-md xl:rounded-3xl "
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero-720.mp4" type="video/mp4" />
        {/* No fallback content */}
      </video>
    </AspectRatio>
  );
};

export default HeroVideo;
