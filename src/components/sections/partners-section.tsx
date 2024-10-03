import { PartnerLogo } from "../common";

const PartnersSection: React.FC = () => (
  <section className="top-16 sm:top-24 left-0 flex flex-col items-center justify-center w-full z-0 bg-white py-8 border-b-4 border-green-600">
    <div className="flex flex-col items-center w-full max-w-4xl px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <PartnerLogo
          src="/images/partners/nodari.png"
          alt="Nodari logo"
          link="https://www.armarinhosnodari.com.br"
          width={160}
          height={160}
        />
        <PartnerLogo
          src="/images/partners/skz-sistemas.svg"
          alt="SKZ Systems logo"
          link="https://www.instagram.com/skzsistemas/"
          height={130}
          width={130}
        />
        <PartnerLogo
          src="/images/partners/freakside.svg"
          alt="Freakside logo"
          link="https://www.instagram.com/freaksidebrandco/"
          width={200}
          height={200}
        />
        <PartnerLogo
          src="/images/partners/wake-fest.svg"
          alt="Wake Fest logo"
          link="https://www.instagram.com/p/C3lhbglsQa7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          width={120}
          height={120}
        />
 
      </div>
    </div>
  </section>
);

export default PartnersSection;

/* <Image
  src="/images/partners/freakside-01.svg"
  alt="Freakside logo"
  width={240}
  height={240}
  className="h-auto max-h-20"
/> */
