import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Zuno Cable Park',
    short_name: 'Zuno Park',
    description: 'Experimente a emoção do wakeboard e wakeskate no Zuno Cable Park, localizado perto de Curitiba.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#22c55e',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    orientation: 'portrait',
    scope: '/',
    lang: 'pt-BR',
  };
}
