import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Homeclass from "./ClassComponent/Homeclass";
import Contactclass from "./ClassComponent/Contactclass";
import Greetting from "./Greetting";
function App() {
  let name = "Akshatha";
  let age = 21;
  return(
    <>
    <h1>Hello Everyone</h1>
    <h3>Welcome to React</h3>
    <Home />
    <About />
    <Homeclass />
    <Contact />
    <Contactclass />
    <Greetting fn={name} age= {age} favcolor="Cirmson"/>
    </>
  )
}
export default App;