"use client";

import { motion } from "framer-motion";

import { AdditionalInfo, HeroHeadings, PricesTable } from "@/components";

const HowItWorksSection = () => {
  return (
    <motion.section
      className="max-w-page mx-auto w-full px-4 py-8 md:py-12 flex flex-col items-start justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <HeroHeadings />
      <PricesTable />
      <AdditionalInfo />
    </motion.section>
  );
};

export default HowItWorksSection;
