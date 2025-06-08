// src/app/projects/page.tsx (ou app/projects/page.tsx)
'use client'; // Necessário se você for adicionar animações Framer Motion aqui também

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Anima cada item filho com um pequeno atraso
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Dados de exemplo para seus projetos. Substitua isso pelos seus projetos reais!
  const projectData = [
    {
      id: 1,
      title: 'E-commerce Moderno',
      description: 'Plataforma de vendas online com React, Next.js e Node.js.',
      technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      imageUrl: 'https://via.placeholder.com/400x250/1A74E9/FFFFFF?text=E-commerce', // Imagem de exemplo
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'API de Gerenciamento de Tarefas',
      description: 'API RESTful robusta para gerenciar tarefas e usuários com autenticação JWT.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'TypeScript'],
      imageUrl: 'https://via.placeholder.com/400x250/5B9DFF/FFFFFF?text=API+Tasks', // Imagem de exemplo
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Dashboard Analítico',
      description: 'Dashboard interativo para visualização de dados com gráficos em tempo real.',
      technologies: ['React', 'D3.js', 'Python', 'Flask'],
      imageUrl: 'https://via.placeholder.com/400x250/0B0E23/FFFFFF?text=Dashboard', // Imagem de exemplo
      liveUrl: '#',
      githubUrl: '#',
    },
    // Adicione mais projetos aqui
  ];

  return (
    <div className="flex flex-col min-h-screen bg-dark-blue-bg text-text-light font-inter">
      <Header />

      <main className="flex-grow p-8 md:p-16">
        <motion.h1
          className="text-4xl md:text-5xl font-outfit text-primary-blue text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meus Projetos
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              className="bg-primary-blue/10 rounded-lg p-6 shadow-xl border border-primary-blue/20 flex flex-col h-full"
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }} // Animação ao passar o mouse
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h2 className="text-2xl font-outfit text-primary-blue mb-2">{project.title}</h2>
              <p className="text-text-light text-sm flex-grow mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-accent-green-light/20 text-accent-green-light text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-end gap-4 mt-auto"> {/* mt-auto empurra os botões para baixo */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-blue hover:bg-secondary-blue text-white text-sm py-2 px-4 rounded-full transition-colors duration-200"
                >
                  Ver Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-text-medium/20 hover:bg-text-medium/40 text-text-light text-sm py-2 px-4 rounded-full transition-colors duration-200"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}