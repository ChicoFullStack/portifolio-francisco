// src/app/contact/page.tsx (ou app/contact/page.tsx)
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react'; // Para o estado do formulário

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Enviando...');

    // Aqui você integraria com um serviço de formulário (ex: Formspree, Netlify Forms)
    // ou seu próprio endpoint de backend.
    // Exemplo com Formspree (substitua YOUR_FORMSPREE_FORM_ID):
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Mensagem enviada com sucesso! Entrarei em contato em breve.');
        setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
      } else {
        setStatus('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      setStatus('Ocorreu um erro. Por favor, verifique sua conexão.');
    }
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
          Entre em Contato
        </motion.h1>

        <motion.div
          className="max-w-2xl w-full bg-primary-blue/10 rounded-lg p-8 shadow-xl border border-primary-blue/20"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={formItemVariants}>
              <label htmlFor="name" className="block text-text-light text-lg font-medium mb-2">Seu Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-dark-blue-bg border border-text-medium/30 text-text-light placeholder-text-medium focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue"
              />
            </motion.div>

            <motion.div variants={formItemVariants}>
              <label htmlFor="email" className="block text-text-light text-lg font-medium mb-2">Seu Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-dark-blue-bg border border-text-medium/30 text-text-light placeholder-text-medium focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue"
              />
            </motion.div>

            <motion.div variants={formItemVariants}>
              <label htmlFor="message" className="block text-text-light text-lg font-medium mb-2">Sua Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-dark-blue-bg border border-text-medium/30 text-text-light placeholder-text-medium focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-primary-blue hover:bg-secondary-blue text-white font-bold py-3 px-6 rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              variants={formItemVariants}
            >
              Enviar Mensagem
            </motion.button>
          </form>

          {status && (
            <motion.p
              className={`mt-6 text-center text-lg ${status.includes('sucesso') ? 'text-secondary-blue' : 'text-red-400'}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {status}
            </motion.p>
          )}

          <motion.div
            className="mt-12 text-center text-text-light text-lg space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
            }}
          >
            <motion.p variants={formItemVariants}>
              Você também pode me encontrar aqui:
            </motion.p>
            <motion.div className="flex justify-center gap-6" variants={formItemVariants}>
              <a href="https://www.linkedin.com/in/francisco-cl%C3%A1udio-de-assis-oliveira-a8206497/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-blue transition-colors duration-200">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM4 9H0v12h4zM2 6a2 2 0 110-4 2 2 0 010 4z"/></svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/ChicoFullStack" target="_blank" rel="noopener noreferrer" className="hover:text-primary-blue transition-colors duration-200">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.08-.731.084-.717.084-.717 1.192.083 1.816 1.29 1.816 1.29 1.06 1.816 2.784 1.298 3.442.993.108-.775.418-1.298.762-1.594-2.65-.295-5.462-1.325-5.462-5.922 0-1.31.465-2.383 1.235-3.221-.125-.295-.533-1.522.124-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.292-1.552 3.3-.322 3.3-.322.658 1.654.249 2.881.124 3.176.77.838 1.235 1.911 1.235 3.221 0 4.606-2.812 5.626-5.474 5.914.432.373.823 1.102.823 2.222v3.293c0 .319.192.694.796.574C20.565 21.801 24 17.309 24 12c0-6.627-5.373-12-12-12z"/></svg>
                <span className="sr-only">GitHub</span>
              </a>
              {/* Adicione outros links sociais aqui (ex: Twitter, email) */}
            </motion.div>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}