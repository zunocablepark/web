// pages/zuno-full-experience.tsx

import Link from "next/link";

const ZunoFullExperience = () => {
  return (
    <div className="bg-black text-white">
      {/* Header Section */}
      <header
        className="bg-cover bg-center h-[440px] relative"
        style={{
          backgroundImage: "url(/images/other/zuno-full-experience.jpg)",
        }}
      >
        <div className="bg-black bg-opacity-70 w-full h-full absolute top-0 left-0"></div>
        <div className="container mx-auto px-6 py-12 relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-green-500 text-center font-extrabold">
            ZUNO FULL EXPERIENCE
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Sobre o Wakeboard */}
        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-green-500 mb-4">
            Sobre o Wakeboard
          </h2>
          <p className="text-lg leading-relaxed">
            O wakeboard é aquela vibe! Um esporte aquático que junta surfe,
            snowboard e esqui aquático. A galera é puxada por um cabo ou lancha,
            deslizando sobre a água e curtindo uma aventura irada. É pra todo
            mundo, dos novatos aos mais experientes, garantindo momentos
            inesquecíveis em contato com a natureza.
          </p>
        </section>

        {/* História do Cable Park */}
        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-green-500 mb-4">
            A História do Cable Park em Curitiba
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Curitiba virou o pico do wakeboard no Brasil graças a cable parks
            como o{" "}
            <Link
              href="https://www.royalwakepark.com.br"
              className="text-green-500 hover:underline"
            >
              Royal Wake Park
            </Link>{" "}
            e nós, do Zuno Cable Park. Com um sistema de cabos elétricos que
            deixa as lanchas de lado, o esporte ficou mais prático, acessível e
            eco-friendly.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            O{" "}
            <Link
              href="https://www.royalwakepark.com.br"
              className="text-green-500 hover:underline"
            >
              Royal Wake Park
            </Link>{" "}
            chegou em 2014 pra aproximar o wakeboard da galera. Eles trouxeram o
            esporte pra perto da cidade, facilitando pra quem nunca teve a
            chance de praticar. Com um sistema elétrico maneiro, ficou bem mais
            fácil pros iniciantes aprenderem, e os veteranos também se amarram
            no espaço. Lugar show, cheio de natureza, com água limpinha,
            obstáculos irados e instrutores fera em todas as sessões.
          </p>
          <p className="text-lg leading-relaxed">
            Tanto o Royal Wake Park quanto o Zuno Cable Park compartilham a
            missão de espalhar o amor pelo wakeboard, trazendo essa vibe que a
            gente curte pra quem nunca teve a oportunidade de praticar.
          </p>
        </section>

        {/* ZUNO FULL EXPERIENCE */}
        <section className="mb-12 bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold text-green-500 mb-4">
            JÁ AGENDOU SUA SESSION?
          </h2>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>
              <strong>Aulas Exclusivas:</strong> Aprenda ou aperfeiçoe suas
              habilidades com instrutores profissionais.
            </li>
            <li>
              <strong>Equipamentos de Alta Qualidade:</strong> A gente
              disponibiliza todo o equipamento pra você curtir numa boa e com
              segurança.
            </li>
            <li>
              <strong>Ambiente Incrível:</strong> Aproveite nossas instalações e
              a natureza que cerca o parque. Visual irado!
            </li>
          </ul>
        </section>

        {/* Por Que Escolher o Zuno Cable Park */}
        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-green-500 mb-4">
            Por que escolher o Zuno Cable Park?
          </h2>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>
              <strong>Estrutura de Ponta:</strong> Temos uma infraestrutura
              completa pra galera de todos os níveis.
            </li>
            <li>
              <strong>Comunidade Vibrante:</strong> Faça parte de uma turma que
              é apaixonada por wakeboard.
            </li>
            <li>
              <strong>Localização Top:</strong> Perto de Curitiba, com fácil
              acesso e estacionamento tranquilo.
            </li>
          </ul>
        </section>

        {/* Como Participar */}
        <section className="mb-12 bg-green-500 text-black p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold mb-4">Como participar</h2>
          <ol className="list-decimal list-inside text-lg leading-relaxed">
            <li>
              <strong>Agende Sua Sessão:</strong> Fala com a gente pelo WhatsApp
              ou telefone.
            </li>
            <li>
              <strong>Prepare-se:</strong> Vista uma roupa confortável e traga
              aquela energia positiva!
            </li>
            <li>
              <strong>Venha se Divertir:</strong> Chegue um pouco antes e
              aproveite ao máximo a experiência.
            </li>
          </ol>
          <div className="mt-6">
            <Link
              href="/agendar"
              className="flex justify-center font-extrabold bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
            >AGENDAR</Link>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-green-500 mb-4">
            Depoimentos
          </h2>
          <div className="space-y-8">
            <blockquote className="text-lg italic border-l-4 border-green-500 pl-4">
              &quot;Uma experiência inesquecível! Os instrutores são incríveis e
              o ambiente é super acolhedor.&quot; —{" "}
              <span className="font-semibold">Cliente Satisfeito</span>
            </blockquote>
            <blockquote className="text-lg italic border-l-4 border-green-500 pl-4">
              &quot;Melhor lugar pra praticar wakeboard em Curitiba!&quot; —{" "}
              <span className="font-semibold">Amante do Wake</span>
            </blockquote>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ZunoFullExperience;
