import './styles/globals.css';  // Certifique-se de que o caminho está correto

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ChartPage from './pages/ChartPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chart" element={<ChartPage />} />
            </Routes>
        </Router>
    );
}

export default App;
