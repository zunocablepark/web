import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

import {
  ADDRESS_LABEL,
  EMAIL,
  EMAIL_LABEL,
  PHONE,
  PHONE_LABEL,
} from "@/lib/constants/";

const ContactInfo: React.FC = () => {
  return (
    <div className="font-black text-lg text-white leading-relaxed text-center py-3 sm:py-4 px-4">
      <div className="flex flex-col justify-center sm:flex-row w-full pb-2">
        <Link href={`mailto:${EMAIL}`} className="text-white hover:underline">
          {EMAIL_LABEL}
        </Link>
        <span className="text-slate-400 hidden sm:block">
          &nbsp;&nbsp;|&nbsp;&nbsp;
        </span>
        <Link href={`tel:${PHONE}`} className="text-white hover:underline">
          {PHONE_LABEL}
        </Link>
      </div>
      <p className="pb-1">{ADDRESS_LABEL}</p>
      <p className="text-md font-bold">
        <FaMapMarkerAlt size={16} className="inline me-2" />
        Estamos alocados no mesmo espaço que o{" "}
        <Link
          className="italic hover:text-green-500 "
          href="https://www.instagram.com/crozettaparkcross/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Crozetta Park Cross
        </Link>
      </p>
    </div>
  );
};

export default ContactInfo;
