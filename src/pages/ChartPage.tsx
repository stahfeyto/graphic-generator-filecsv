import { useLocation } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import Navbar from '../components/Navbar';

const ChartPage = () => {
  const location = useLocation();
  const data = location.state?.parsedData || [];

  console.log('Dados recebidos para o gráfico:', data); // 🔍 Verifica os dados recebidos

  return (
    <div
      className="chart-container"
      style={{
        width: '100%',
        minWidth: '600px', // Garante uma largura mínima
        padding: '20px',
      }}
    >
      <Navbar />
    
      <ResponsiveContainer width="95%" height={400} style={{ "marginTop":"10rem" }}>
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
