import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/shop_cart_live/',
  plugins: [react()],
  server: {
    historyApiFallback: true
  }
});

