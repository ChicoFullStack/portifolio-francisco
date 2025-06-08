// src/app/page.tsx
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'; // Importe o componente Image do Next.js

export default function Home() {
  // Variantes para as animações de texto (título e parágrafo)
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Variantes para a animação da imagem
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -20 }, // Começa menor, invisível e um pouco acima
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.9, ease: "easeOut", delay: 0.2 } }, // Entra visível, na posição, um pouco depois
  };

  // Variantes para as animações do botão
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.6 } }, // Delay para aparecer depois do texto e da imagem
  };

  return (
    <div className="flex flex-col min-h-screen bg-dark-blue-bg text-text-light font-inter">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center p-8 md:p-24 text-center">
        {/* Seção da Imagem/Ilustração */}
        <motion.div
          className="mb-8 md:mb-12" // Espaçamento abaixo da imagem
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          {/* Substitua o src pelo caminho da sua imagem na pasta public */}
          {/* Se usar uma URL externa, adicione o domínio em next.config.mjs */}
          <Image
            src="https://avatars.githubusercontent.com/u/140274298?v=4" // Exemplo: Sua imagem em public/hero-illustration.svg
            alt="Ilustração de desenvolvedor ou tecnologia"
            width={300} // Largura da imagem em pixels (importante para otimização)
            height={300} // Altura da imagem em pixels (importante para otimização)
            priority // Carrega esta imagem o mais rápido possível (é a primeira imagem na tela)
            // A classe rounded-full fará a imagem ficar redonda
            className="rounded-full shadow-2xl border border-primary-blue/30 object-cover" 
          />
        </motion.div>

        {/* Seção de Boas-Vindas */}
        <section className="mb-16">
          <motion.h1
            className="text-4xl md:text-6xl font-outfit text-primary-blue leading-tight mb-4"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.4 }} // Ajustado delay para animar depois da imagem
          >
            Olá, eu sou Francisco.
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-text-light max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.6 }} // Ajustado delay para animar depois do H1
          >
            Desenvolvedor Full-stack apaixonado por transformar ideias em experiências digitais inovadoras.
          </motion.p>
        </section>

        {/* Seção CTA (Call to Action) */}
        <section>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <Link href="/projects" passHref>
              <button className="bg-primary-blue hover:bg-secondary-blue text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                Ver meus Projetos
              </button>
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
