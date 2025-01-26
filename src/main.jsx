import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import './styles/style.scss';
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Header />
        <Home />
    </StrictMode>,
);
