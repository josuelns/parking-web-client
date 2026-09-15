import { setupWorker } from 'msw/browser';
import { parkingHandlers } from './handlers';

export const worker = setupWorker(...parkingHandlers);

export const startMockServiceWorker = async () => {
  await worker.start({
    onUnhandledRequest: 'bypass',
    serviceWorker: {
      url: '/mockServiceWorker.js',
    },
  });
};
