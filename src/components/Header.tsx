// src/components/Header.tsx
'use client'; // Necessário para usar useState e Framer Motion

import Link from 'next/link';
import { useState } from 'react'; // Para gerenciar o estado do menu
import { motion, AnimatePresence } from 'framer-motion'; // Para as animações do menu

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar a abertura/fechamento do menu

  // Variantes para a animação do menu mobile (slide-in/out)
  const menuVariants = {
    hidden: { x: '100%' }, // Começa fora da tela, à direita
    visible: { x: '0%', transition: { type: 'spring', stiffness: 100, damping: 20 } }, // Desliza para dentro
    exit: { x: '100%', transition: { type: 'spring', stiffness: 100, damping: 20 } }, // Desliza para fora
  };

  return (
    <header className="bg-dark-blue-bg text-text-light p-4 md:p-6 flex justify-between items-center shadow-lg relative z-50">
      <div className="text-2xl font-outfit font-bold text-primary-blue">
        <Link href="/" onClick={() => setIsMenuOpen(false)}> {/* Fecha o menu ao clicar no logo */}
          Francisco.dev
        </Link>
      </div>

      {/* Menu para telas maiores (Desktop) */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-8">
          <li>
            <Link href="/projects" className="hover:text-secondary-blue transition-colors duration-200">
              Projetos
            </Link>
          </li>
          <li>
            <Link href="/skills" className="hover:text-secondary-blue transition-colors duration-200">
              Habilidades
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-secondary-blue transition-colors duration-200">
              Sobre Mim
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-secondary-blue transition-colors duration-200">
              Contato
            </Link>
          </li>
        </ul>
      </nav>

      {/* Botão do Hambúrguer para Mobile */}
      <button
        className="md:hidden text-text-light focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Abrir menu de navegação"
      >
        {/* Ícone de Hambúrguer (você pode usar um SVG para um design mais customizado) */}
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            // Ícone de "X" quando o menu está aberto
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          ) : (
            // Ícone de Hambúrguer quando o menu está fechado
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          )}
        </svg>
      </button>

      {/* Menu Mobile (com animação Framer Motion) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden fixed top-0 right-0 w-3/4 h-full bg-dark-blue-bg shadow-xl p-8 transform origin-right z-40 flex flex-col"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              className="absolute top-4 right-4 text-text-light focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fechar menu de navegação"
            >
              {/* Ícone de "X" para fechar o menu mobile */}
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <ul className="flex flex-col space-y-6 mt-16 text-2xl">
              <li>
                <Link href="/" className="hover:text-secondary-blue transition-colors duration-200 block" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-secondary-blue transition-colors duration-200 block" onClick={() => setIsMenuOpen(false)}>
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-secondary-blue transition-colors duration-200 block" onClick={() => setIsMenuOpen(false)}>
                  Habilidades
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary-blue transition-colors duration-200 block" onClick={() => setIsMenuOpen(false)}>
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary-blue transition-colors duration-200 block" onClick={() => setIsMenuOpen(false)}>
                  Contato
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
