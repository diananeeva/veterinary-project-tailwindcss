import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import AnimalLoverSection from './components/AnimalLoverSection';

export default function App() {
  return (
    <div>
      <NavBar />
      
      <main className="w-full ">
        <AboutSection />
        <AnimalLoverSection />
      </main>
    </div>
  );
}
