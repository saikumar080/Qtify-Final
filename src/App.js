
import './App.css';
// import AlbumCard from './Components/Cards/Albums/AlbumCard';
import HeroSection from './Components/HeroSection/HeroSection';
import Navbar from './Components/Navbar/Navbar';
import Section from './Components/Section/Section';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div style={{ padding: '20px' }}>
        <Section 
          title="Top Albums"
          fetchUrl="https://qtify-backend-labs.crio.do/albums/top"
        />
        <Section 
          title="Top Artists"
          fetchUrl="https://qtify-backend-labs.crio.do/albums/new"
        />
      </div>
    </div>
  );
}

export default App;
