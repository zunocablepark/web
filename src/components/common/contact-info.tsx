import Link from "next/link";

import {
  ADDRESS_LABEL,
  EMAIL,
  EMAIL_LABEL,
  PHONE,
  PHONE_LABEL,
} from "@/lib/constants/";

const ContactInfo = () => {
  return (
    <div className="font-black text-lg text-white leading-relaxed text-center py-3 sm:py-4 px-4">
      <div className="flex flex-col justify-center sm:flex-row w-full pb-2">
        <Link href={`mailto:${EMAIL}`} className="text-white hover:underline">
          {EMAIL_LABEL}
        </Link>
        <span className="text-slate-400 hidden sm:block">
          &nbsp;&nbsp;|&nbsp;&nbsp;
        </span>
        <Link href={`tel:${PHONE}`} className=" text-white hover:underline">
          {PHONE_LABEL}
        </Link>
      </div>
      <p className="">{ADDRESS_LABEL}</p>
    </div>
  );
};

export default ContactInfo;
