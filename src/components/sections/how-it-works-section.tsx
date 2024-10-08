import { AdditionalInfo, HeroHeadings, PricesTable } from "@/components";

const HowItWorksSection = () => {
  return (
    <section
    className="max-w-page mx-auto w-full px-4 py-8 md:py-12 flex flex-col items-start justify-center"
    >
      <HeroHeadings />
      <PricesTable />
      <AdditionalInfo />
    </section>
  );
};

export default HowItWorksSection;
