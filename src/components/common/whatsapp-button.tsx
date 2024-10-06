import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import { inquiryLink } from "@/lib/whatsapp";

const WhatsAppButton = () => {
  return (
    <Link
      className="fixed z-50 bottom-2 sm:bottom-4 right-2 sm:right-4 flex items-center justify-center p-3 rounded-full  bg-green-600 hover:bg-green-700 shadow-sm hover:shadow-md shadow-green-600 hover:shadow-slate-600 border-slate-600 border"
      href={inquiryLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={32} />
    </Link>
  );
};

export default WhatsAppButton;
