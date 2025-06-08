// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-dark-blue-bg text-text-light p-4 md:p-6 flex justify-between items-center shadow-lg">
      <div className="text-2xl font-outfit font-bold text-primary-blue">
        <Link href="/">
          Francisco.dev
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-4 md:space-x-8">
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
    </header>
  );
}