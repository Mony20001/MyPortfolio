import Skill from "../components/Skill"
import About from "../components/About"
import Project from "../components/Project"
import Contact from "../components/Contact"
import HeroSection from "../components/HeroSection"

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