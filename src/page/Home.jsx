import Skill from "../components/Skill"
import About from "../components/About"
import Project from "../components/Project"
import Contact from "../components/Contact"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Home =() =>{
return(
     <div>
      <HeroSection></HeroSection>
      <Skill></Skill>
      <Project></Project>
      <Contact></Contact>
      <About></About>
     </div>
 )
}
export default Home;