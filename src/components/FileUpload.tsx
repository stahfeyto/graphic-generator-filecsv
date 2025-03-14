import { useNavigate } from 'react-router-dom';
import Papa from 'papaparse';
import { useState } from 'react';

// Definição do tipo esperado para os dados do CSV
interface CSVRow {
    x: string;
    y: number;
}

const FileUpload = () => {
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        setError(null);
        const file = event.target.files?.[0];

        if (!file) return;

        if (file.type !== "text/csv") {
            setError("Por favor, selecione um arquivo CSV válido.");
            return;
        }

        Papa.parse<CSVRow>(file, {
            complete: (result) => {
                console.log("Dados brutos do CSV:", result.data); // 🔍 Log dos dados recebidos

                if (!result.data.length) {
                    setError("O arquivo CSV está vazio ou mal formatado.");
                    return;
                }

                const formattedData = result.data
                    .filter((row) => row.x && row.y) // Filtra linhas inválidas
                    .map((row) => ({
                        x: String(row.x).trim(), // Remove espaços extras
                        y: isNaN(Number(row.y)) ? 0 : Number(row.y), // Evita NaN
                    }));

                console.log("Dados formatados para o gráfico:", formattedData); // 🔍 Verificar estrutura dos dados

                navigate('/chart', { state: { parsedData: formattedData } });
            },
            header: true,
            skipEmptyLines: true,
            dynamicTyping: true, // Converte números automaticamente
            error: (error) => {
                setError("Erro ao processar o arquivo CSV: " + error.message);
            },
        });
    };

    return (
        <div className="upload-container">
            <p>Faça upload de um arquivo CSV para gerar um gráfico</p>
            <label className="upload-label">
                📂 Escolher arquivo
                <input type="file" accept=".csv" onChange={handleFileUpload} hidden />
            </label>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default FileUpload;
