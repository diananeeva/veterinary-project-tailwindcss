import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import AnimalLoverSection from './components/AnimalLoverSection';
import OurJob from './components/OurJob';
import PriceList from './components/PriceList';
import AnimalLoverSection2 from './components/AnimalLover2';
import VetCareTeam from './components/VetCareTeam';
import OurAchiev from './components/OurAchievements';
import RecentPosts from './components/RecentyPosts';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <NavBar />
      
      <main className="w-full ">
        <AboutSection />
        <AnimalLoverSection />
        <OurJob />
        <AnimalLoverSection2 />
        <PriceList />
        <VetCareTeam />
        <OurAchiev />
        <RecentPosts />
        <Footer />
      </main>
    </div>
  );
}
