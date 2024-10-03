const PricesTables = () => {
  return (
    <div className="pt-4 text-white text-xl md:text-2xl w-full mx-auto">
      <h3 className="title text-4xl md:text-5xl text-green-500 font-black mb-4">
        Valores
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
        <div className="block max-w-lg">
          <div className="block-item mb-8">
            <h3 className="title text-2xl md:text-3xl text-white font-black mb-4">
              Sessão de Wake (15&apos;&apos;)
            </h3>
            <div className="flex flex-col">
              <div className="flex justify-between mb-2">
                <div className="pr-2">Equipamento próprio</div>
                <div>
                  <span className="font-black text-nowrap">R$ 60,00</span>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="pr-2">Incluído aluguel de equipamento</div>
                <div>
                  <span className="font-black text-nowrap">R$ 80,00</span>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="pr-2">Wake Skate</div>
                <div>
                  <span className="font-black text-nowrap">R$ 50,00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block max-w-lg ">
          <div className="block-item mb-8">
            <h3 className="title text-2xl md:text-3xl text-white font-black mb-4">
              Plano Mensal
            </h3>
            <div className="flex flex-col">
              <div className="flex justify-between mb-2">
                <div className="pr-2">Equipamento próprio</div>
                <div>
                  <span className="font-black text-nowrap">R$ 1000,00</span>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="pr-2">Individual</div>
                <div>
                  <span className="font-black text-nowrap">R$ 1.200,00</span>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="pr-2">Compartilhado</div>
                <div>
                  <span className="font-black text-nowrap">R$ 1.400,00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricesTables;
