import { IoBeerOutline } from 'react-icons/io5'
import {
  MdOutlinePets,
  MdOutlineSnowboarding,
  MdOutlineFamilyRestroom,
} from 'react-icons/md'

const AdditionalInfo = () => {
  return (
    <div className="text-pretty md:text-center w-full mx-auto">
      <div className="mx-auto flex justify-center mb-12">
        <MdOutlineFamilyRestroom className="inline-block w-14 h-14 bg-green-600 rounded-full p-2 mx-2 border-2" />
        <MdOutlinePets className="inline-block w-14 h-14 bg-green-600 rounded-full p-2 mx-2 border-2" />
        <IoBeerOutline className="inline-block w-14 h-14 bg-green-600 rounded-full p-2 mx-2 border-2" />
        <MdOutlineSnowboarding className="inline-block w-14 h-14 bg-green-600 rounded-full p-2 mx-2 border-2" />
      </div>
      <div className="flex flex-col">
        <p className="text-wrap text-lg sm:text-xl mb-2">
          Permitimos a entrada de animais de estimação, mas pedimos que cada um
          cuide de seu bichinho com responsabilidade.
        </p>
        <p className="text-wrap text-lg sm:text-xl mb-2">
          Disponibilizamos para venda água, cerveja, refrigerantes e isotônicos
          no local.
        </p>
        <p className="text-wrap text-lg sm:text-xl">
          Recomendamos que o consumo de bebidas alcoólicas seja feito apenas
          após a sessão de wake.
        </p>
      </div>
    </div>
  )
}

export default AdditionalInfo
