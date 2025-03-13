import { useNavigate } from 'react-router-dom';
import Papa from 'papaparse';

// Definição do tipo esperado para os dados do CSV
interface CSVRow {
    x: string;
    y: number;
}

const FileUpload = () => {
    const navigate = useNavigate();

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            Papa.parse<CSVRow>(file, {
                complete: (result) => {
                    const formattedData = result.data.map((row) => ({
                        x: row.x, // Assume que a coluna x existe
                        y: Number(row.y), // Converte y para número
                    }));

                    navigate('/chart', { state: { parsedData: formattedData } });
                },
                header: true,
            });
        }
    };

    return (
        <div className="upload-container">
            <p>Faça upload de um arquivo CSV para gerar um gráfico</p>
            <input type="file" accept=".csv" onChange={handleFileUpload} />
        </div>
    );
};

export default FileUpload;
