import Navbar from '../components/Navbar';
import FileUpload from "../components/FileUpload";


const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <h2>Bem-vindo ao Visah Dashboard</h2>
            <FileUpload />
        </div>
    );
};

export default Home;
