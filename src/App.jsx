import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';

export default function App() {
  return (
    <div>
      <NavBar />
      
      <main className="w-full ">
        <AboutSection />
      </main>
    </div>
  );
}
