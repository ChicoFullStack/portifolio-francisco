// src/app/about/page.tsx (ou app/about/page.tsx)
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-dark-blue-bg text-text-light font-inter">
      <Header />

      <main className="flex-grow p-8 md:p-16 flex flex-col items-center">
        <motion.h1
          className="text-4xl md:text-5xl font-outfit text-primary-blue text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sobre Mim
        </motion.h1>

        <motion.div
          className="max-w-4xl mx-auto bg-primary-blue/10 rounded-lg p-8 shadow-xl border border-primary-blue/20"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <motion.img
            src="https://avatars.githubusercontent.com/u/140274298?v=4" // Substitua pela sua foto
            alt="Sua foto de perfil"
            className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-secondary-blue shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />

          <motion.p
            className="text-lg text-text-light leading-relaxed mb-6"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ delay: 0.6 }}
          >
            Olá! Sou Francisco, um desenvolvedor full-stack apaixonado por construir aplicações web inovadoras e eficientes. Minha jornada na programação começou com a curiosidade de entender como as coisas funcionam por baixo dos panos, e desde então, tenho me dedicado a transformar ideias em realidade digital.
          </motion.p>
          <motion.p
            className="text-lg text-text-light leading-relaxed mb-6"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ delay: 0.8 }}
          >
            Com experiência tanto em **frontend** (React, Next.js, Tailwind CSS) quanto em **backend** (Node.js, Express, Python, Django), eu me considero um solucionador de problemas versátil. Adoro o desafio de criar interfaces de usuário intuitivas e bonitas, ao mesmo tempo em que garanto a robustez e a escalabilidade do lado do servidor.
          </motion.p>
          <motion.p
            className="text-lg text-text-light leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ delay: 1.0 }}
          >
            Quando não estou codificando, gosto de [mencione alguns hobbies ou interesses, ex: jogar videogames, explorar novas tecnologias, fazer trilhas]. Acredito que o aprendizado contínuo e a paixão pelo que fazemos são chaves para o sucesso. Vamos criar algo incrível juntos!
          </motion.p>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}