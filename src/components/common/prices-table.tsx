const PricesTables = () => {
  return (
    <div className="w-full bg-black/50 backdrop-blur-sm py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="title text-5xl md:text-6xl text-green-500 font-black mb-8 text-center">
          Valores
        </h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Com equipamento da casa */}
          <div className="bg-black/40 rounded-xl p-8 backdrop-blur-sm border border-green-500/20">
            <h4 className="title text-2xl text-white font-black mb-8 text-center">
              Com Equipamento da Casa
            </h4>
            <div className="flex flex-col space-y-6">
              <div className="flex justify-between items-center py-3 border-b border-green-500/10">
                <div className="pr-2 text-xl md:text-2xl">15 MIN</div>
                <div>
                  <span className="font-black text-nowrap text-green-400 text-2xl md:text-3xl">
                    R$ 100,00
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-green-500/10">
                <div className="pr-2 text-xl md:text-2xl">30 MIN</div>
                <div>
                  <span className="font-black text-nowrap text-green-400 text-2xl md:text-3xl">
                    R$ 180,00
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Com equipamento próprio */}
          <div className="bg-black/40 rounded-xl p-8 backdrop-blur-sm border border-green-500/20">
            <h4 className="title text-2xl text-white font-black mb-8 text-center">
              Com Equipamento Próprio
            </h4>
            <div className="flex flex-col space-y-6">
              <div className="flex justify-between items-center py-3 border-b border-green-500/10">
                <div className="pr-2 text-xl md:text-2xl">15 MIN</div>
                <div>
                  <span className="font-black text-nowrap text-green-400 text-2xl md:text-3xl">
                    R$ 80,00
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-green-500/10">
                <div className="pr-2 text-xl md:text-2xl">30 MIN</div>
                <div>
                  <span className="font-black text-nowrap text-green-400 text-2xl md:text-3xl">
                    R$ 140,00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 max-w-4xl mx-auto text-center space-y-4 text-lg md:text-xl">
          <p className="text-white">• Chegar com 15 minutos de antecedência.</p>
          <p className="text-white">
            • Não trabalhamos com tempo de tolerância para atraso.
          </p>
          <p className="text-white bg-green-900/50 p-4 rounded-lg mt-6 text-lg md:text-xl">
            Cancelamentos com reembolso ou reagendamento somente com 24 horas de
            antecedência.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PricesTables
