// src/components/Footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear(); // Obtém o ano atual

  return (
    <footer className="bg-dark-blue-bg text-text-medium p-4 md:p-6 text-center border-t border-text-medium/20 mt-auto">
      <p className="text-sm">
        &copy; {currentYear} Francisco. Todos os direitos reservados.
      </p>
      <p className="text-xs mt-2">
        Desenvolvido com Next.js, Tailwind CSS e muito café.
      </p>
    </footer>
  );
}