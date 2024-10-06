import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        alt="Zuno Cable Park"
        src="/images/logo.png"
        width={120}
        height={60}
        priority={true}
      />
    </Link>
  );
};

export default Logo;
