import Link from 'next/link'

import { sessionLink } from '@/lib/whatsapp'

const HeroHeadings = () => {
  return (
    <>
     <h2 className="pb-12 md:pb-16 mx-auto text-center text-3xl md:text-5xl font-extrabold">
        O DESTINO PERFEITO PARA OS AMANTES DE WAKEBOARD
      </h2>
      <p className="pb-8 text-start text-5xl md:text-7xl text-green-500 font-black tracking-tight">
        TERÇA A SEXTA:
        <br />
        <span className="font-semibold">08:00 - 18:00</span>
      </p>
      <p className="pb-4 text-start text-5xl md:text-7xl text-green-500 font-black tracking-tight">
        SÁBADO, DOMINGO E FERIADOS:
        <br />
        <span className="font-semibold">09:00 - 19:00</span>
      </p>
      <Link
        className="m-8 p-3 sm:p-4 flex text-center items-center justify-center self-center text-xl md:text-2xl font-black bg-green-600 hover:bg-green-700 shadow-sm hover:shadow-md shadow-green-600 hover:shadow-slate-800 rounded-md"
        href={sessionLink}
        target="_blank"
      >
        FAÇA SEU AGENDAMENTO
      </Link>
    </>
  )
}

export default HeroHeadings
