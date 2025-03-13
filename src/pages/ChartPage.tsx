import { useLocation } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from '../components/Navbar';

const ChartPage = () => {
    const location = useLocation();
    const data = location.state?.parsedData || [];

    return (
        <div className="chart-container">
            <Navbar />
            <h2>Gráfico Gerado</h2>
            <ResponsiveContainer width="80%" height={400}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="x" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="y" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ChartPage;
