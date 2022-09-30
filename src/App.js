import './App.css';
import CampsitesDirectoryPage from './pages/CampsiteDirectoryPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header/>
      <CampsitesDirectoryPage />
      <Footer/>
    </div>
  );
}

export default App;
