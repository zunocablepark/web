import { PartnerLogo } from "../common";
import { Button } from "../ui";

const PartnersSection: React.FC = () => (
  <section className="top-16 sm:top-24 left-0 flex flex-col items-center justify-center w-full z-0 bg-white py-8 border-b-4 border-green-600">
    <h2 className="hidden text-black font-extrabold text-3xl underline">PARCEIROS:</h2>
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 w-full max-w-6xl mx-auto justify-items-center">
      <PartnerLogo
        src="/images/partners/nodari.png"
        alt="Armarinhos Nodari"
        link="https://www.armarinhosnodari.com.br"
        width={160}
        height={160}
      />
      <PartnerLogo
        src="/images/partners/skz-sistemas.svg"
        alt="SKZ Systemas"
        link="https://www.instagram.com/skzsistemas/"
        height={130}
        width={130}
      />
      <PartnerLogo
        src="/images/partners/freakside.svg"
        alt="Freakside Brando Co."
        link="https://www.instagram.com/freaksidebrandco/"
        width={200}
        height={200}
      />
      <PartnerLogo
        src="/images/partners/wake-fest.svg"
        alt="Wake Fest"
        link="https://www.instagram.com/p/C3lhbglsQa7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        width={120}
        height={120}
      />
    </div>
    <Button className="hidden text-black text-xl font-extrabold bg-green-600 hover:bg-green-500 p">VER MAIS</Button>
  </section>
);

export default PartnersSection;
