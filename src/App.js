import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './page/Home';
import SkillPage from './page/SkillPage';
import ProjectPage from './page/ProjectPage';
import ContactPage from './page/ContactPage';
import AboutPage from './page/AboutPage'
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/skill" element={<SkillPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;