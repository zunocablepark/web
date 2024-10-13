import Image from 'next/image';

interface GalleryItemProps {
  src: string;
  alt: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt }) => {
  return (
    <div className="relative w-full h-full min-w-[200px] min-h-[200px] rounded-lg">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="object-cover w-full h-full"
        loading="lazy"
      />
    </div>
  );
};

export default GalleryItem;
