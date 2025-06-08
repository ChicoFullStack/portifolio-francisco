// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com', // Adiciona o domínio do GitHub para a sua imagem
        port: '',
        pathname: '/**',
      },
      // Se você já tinha outros domínios aqui, mantenha-os.
      // Exemplo:
      // {
      //   protocol: 'https',
      //   hostname: 'via.placeholder.com',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
  },
};

export default nextConfig;
