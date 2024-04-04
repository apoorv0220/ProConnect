import './App.css';
import AllPages from './Pages/AllPages';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const baseServerURL = "https://pro-connect-backend.vercel.app/";

function App() {
  return (
    <>
      <Navbar baseServerURL={baseServerURL} />
      <AllPages baseServerURL={baseServerURL} />
      <Footer />
    </>
  );
}

export default App;
