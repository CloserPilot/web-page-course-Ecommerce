import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(() => {
  // Cargar variables VITE_ desde .env usando la ruta raíz del proyecto
  const env = loadEnv('', __dirname, 'VITE_');

  console.log('VITE_API_BASE_URL:', env.VITE_API_BASE_URL);

  return {
    plugins: [react()],
    server: {
      watch: {
        usePolling: true,
        interval: 100
      }
    }
  };
});
