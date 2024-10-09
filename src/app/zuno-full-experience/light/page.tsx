import Link from "next/link";

const ZunoFullExperience = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Seção de Cabeçalho */}
      <header
        className="bg-cover bg-center h-[440px] relative"
        style={{
          backgroundImage: "url(/images/other/zuno-full-experience.jpg)",
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
        <div className="container mx-auto px-6 py-12 relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white text-center font-extrabold">
            ZUNO FULL EXPERIENCE
          </h1>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="container mx-auto px-6 py-12">
        {/* Sobre o Wakeboard */}
        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-green-600 mb-4">
            Sobre o Wakeboard
          </h2>
          <p className="text-lg leading-relaxed text-black">
            O wakeboard é um esporte aquático emocionante que combina elementos
            do surfe, snowboard e esqui aquático. Nele, os praticantes são
            puxados por um cabo ou lancha, deslizando sobre a água e vivenciando
            uma experiência única de diversão e aventura. É uma atividade
            acessível para todos, desde iniciantes até os mais experientes,
            proporcionando momentos inesquecíveis em contato com a natureza.
          </p>
        </section>

        {/* História do Cable Park */}
        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-green-600 mb-4">
            A História do Cable Park em Curitiba
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-black">
            Curitiba tornou-se um ponto de referência para o wakeboard no Brasil
            graças ao desenvolvimento de cable parks como o{" "}
            <Link
              href="https://www.royalwakepark.com.br"
              className="text-green-600 hover:underline"
            >
              Royal Wake Park
            </Link>{" "}
            e o Zuno Cable Park. Os cable parks utilizam um sistema de cabos
            elétricos que substitui a necessidade de lanchas, tornando o esporte
            mais prático, acessível e ecológico.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-black">
            O{" "}
            <Link
              href="https://www.royalwakepark.com.br"
              className="text-green-600 hover:underline"
            >
              Royal Wake Park
            </Link>{" "}
            surgiu em 2014 com o objetivo de tornar o wakeboard mais próximo e
            acessível a todos. Eles trouxeram o esporte, antes praticado apenas
            atrás de barcos, para perto da cidade. Com um sistema elétrico ideal
            para a prática, facilitaram o aprendizado para iniciantes e
            ofereceram um espaço perfeito também para os mais experientes.
            Localizado em uma propriedade privada com muitas belezas naturais, o
            parque conta com 220 metros de raia, água corrente limpa, diversos
            obstáculos e instrutores qualificados em todas as sessões.
          </p>
          <p className="text-lg leading-relaxed text-black">
            Tanto o Royal Wake Park quanto o Zuno Cable Park compartilham a
            paixão por promover o wakeboard, trazendo esse esporte que amamos
            para perto das pessoas que nunca tiveram a oportunidade de
            praticá-lo.
          </p>
        </section>

        {/* ZUNO FULL EXPERIENCE */}
        <section className="mb-12 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold text-green-600 mb-4">
            Já Agendou Sua Sessão?
          </h2>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li className="text-black">
              <strong className="text-black">Aulas Exclusivas:</strong> Aprenda
              ou aperfeiçoe suas habilidades com instrutores profissionais.
            </li>
            <li className="text-black">
              <strong className="text-black">
                Equipamentos de Alta Qualidade:
              </strong>{" "}
              Disponibilizamos todo o equipamento necessário para uma
              experiência segura e divertida.
            </li>
            <li className="text-black">
              <strong className="text-black">Ambiente Incrível:</strong>{" "}
              Aproveite nossas instalações e a beleza natural que cerca o
              parque.
            </li>
          </ul>
        </section>

        {/* Por Que Escolher o Zuno Cable Park */}
        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-green-600 mb-4">
            Por Que Escolher o Zuno Cable Park?
          </h2>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li className="text-black">
              <strong className="text-black">Estrutura de Ponta:</strong>{" "}
              Oferecemos uma infraestrutura completa para praticantes de todos
              os níveis.
            </li>
            <li className="text-black">
              <strong className="text-black">Comunidade Vibrante:</strong> Faça
              parte de uma comunidade apaixonada por wakeboard.
            </li>
            <li className="text-black">
              <strong className="text-black">Localização Conveniente:</strong>{" "}
              Situado próximo a Curitiba, com fácil acesso e estacionamento.
            </li>
          </ul>
        </section>

        {/* Como Participar */}
        <section className="mb-12 bg-green-600 text-black p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold mb-4">Como Participar</h2>
          <ol className="list-decimal list-inside text-lg leading-relaxed">
            <li className="text-white">
              <strong className="text-white">Agende Sua Sessão:</strong> Entre
              em contato conosco pelo WhatsApp ou telefone.
            </li>
            <li className="text-white">
              <strong className="text-white">Prepare-se:</strong> Vista roupas confortáveis e traga
              muita energia positiva!
            </li>
            <li className="text-white">
              <strong className="text-white">Venha se Divertir:</strong> Chegue com antecedência e
              aproveite ao máximo a experiência.
            </li>
          </ol>
          <div className="mt-6">
            <Link 
              href="/agendar"
              className="flex justify-center bg-white text-green-600 font-extrabold uppercase py-2 px-4 rounded hover:bg-gray-200"
            >
              Agende Agora
            </Link>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-green-600 mb-4">
            Depoimentos
          </h2>
          <div className="space-y-8">
            <blockquote className="text-lg italic border-l-4 border-green-600 pl-4 text-black">
              &quot;Uma experiência inesquecível! Os instrutores são incríveis e
              o ambiente é super acolhedor.&quot; —{" "}
              <span className="font-semibold text-black">Cliente Satisfeito</span>
            </blockquote>
            <blockquote className="text-lg italic border-l-4 border-green-600 pl-4 text-black">
              &quot;Melhor lugar para praticar wakeboard em Curitiba!&quot; —{" "}
              <span className="font-semibold text-black">{"<3"}</span>
            </blockquote>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ZunoFullExperience;
