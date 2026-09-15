import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './assets/utils/styles/global-style';
import { theme } from './assets/utils/styles/theme';
import EntrancePage from './pages/entracePage';
import ExitPage from './pages/exitPage';
import HistoryPage from './pages/historyPage';
import HistoryReservationPage from './pages/historyPageReservation';
import { store } from './store';
import 'react-toastify/dist/ReactToastify.css';

const App: FC = () => (
  <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/entrace" element={<EntrancePage />} />
        <Route path="/entrance" element={<Navigate to="/entrace" replace />} />
        <Route path="/exit" element={<ExitPage />} />
        <Route path="/history/:plate" element={<HistoryPage />} />
        <Route path="/history/:plate/:sessionId" element={<HistoryReservationPage />} />
        <Route path="*" element={<Navigate to="/entrace" replace />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer
      position="top-center"
      autoClose={3500}
      hideProgressBar={false}
      theme="colored"
      toastStyle={{ backgroundColor: theme.colors.primary }}
    />
  </Provider>
);

export default App;
