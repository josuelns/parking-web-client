import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const bootstrap = async () => {
  if (import.meta.env.VITE_USE_MOCK_API === 'true') {
    const { startMockServiceWorker } = await import('./mocks/browser');
    await startMockServiceWorker();
  }

  const container = document.getElementById('root');

  if (!container) {
    throw new Error('Elemento root não encontrado.');
  }

  createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
};

void bootstrap();
