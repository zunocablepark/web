import Image from "next/image";
import Link from "next/link";

interface PartnerLogoProps {
  src: string;
  alt: string;
  link: string;
  width?: number
  height?: number
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ src, alt, link, width = 220, height = 220 }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center p-2 h-full transition-all duration-500 hover:scale-125"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto"
        loading="lazy"
      />
    </Link>
  );
};

export default PartnerLogo;
