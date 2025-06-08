// src/app/layout.tsx
'use client'; // <-- Este componente precisa ser um Client Component para usar AnimatePresence

import './globals.css';
import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion'; // Importe motion e AnimatePresence
import { usePathname } from 'next/navigation'; // Importe usePathname para obter a rota atual

// Configura a fonte para o corpo do texto (ex: Inter)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Configura a fonte para títulos (ex: Outfit)
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

// Note: Metadata não pode ser exportada em Client Components.
// Se você precisar de metadata dinâmica baseada no estado, gerencie-a em um Server Component pai
// ou use outras abordagens. Para este portfólio, podemos manter a metadata estática.
// export const metadata: Metadata = { // <--- Remova ou comente esta linha
//   title: 'Seu Portfólio - Desenvolvedor Full-stack',
//   description: 'Portfólio de projetos de um desenvolvedor frontend e backend com Next.js.',
// };

// Variantes de animação para as transições de página
// const pageVariants = {
//   initial: { opacity: 0, x: -100 }, // Começa invisível e um pouco para a esquerda
//   animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Entra visível, vindo da esquerda
//   exit: { opacity: 0, x: 100, transition: { duration: 0.4, ease: "easeIn" } }, // Sai invisível e para a direita
// };

// NOVAS Variantes de animação para as transições de página
// const pageVariants = {
//   initial: { opacity: 0, scale: 0.98 }, // Começa invisível e ligeiramente menor
//   animate: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }, // Entra visível, escalando para o tamanho normal
//   exit: { opacity: 0, scale: 1.02, transition: { duration: 0.5, ease: "easeIn" } }, // Sai invisível e ligeiramente maior
// };

// NOVAS Variantes de animação para as transições de página (Desfoque e Foco com Delay)
const pageVariants = {
  initial: { opacity: 0, filter: 'blur(10px)', y: 20 }, // Começa invisível, desfocado e um pouco abaixo
  animate: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.8, ease: "easeOut" } }, // Entra visível, focado e na posição
  exit: { opacity: 0, filter: 'blur(10px)', y: -20, transition: { duration: 0.6, ease: "easeIn" } }, // Sai invisível, desfocado e um pouco acima
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname(); // Obtém a rota atual para a chave de AnimatePresence

  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-dark-blue-bg text-text-light antialiased">
        {/* AnimatePresence para gerenciar a animação de entrada/saída de componentes */}
        <AnimatePresence mode="wait"> {/* 'wait' espera a animação de saída terminar antes de montar a nova */}
          {/* A key é essencial para que AnimatePresence saiba quando um componente é "diferente" */}
          <motion.div
            key={pathname} // A rota atual como key faz com que o componente seja remontado na mudança de rota
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col min-h-screen" // Garante que o layout mantenha a altura mínima da tela
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}