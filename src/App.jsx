import About from "./Components/About";
import Buttons from "./Components/Buttons";
import Footer from "./Components/Footer";
import Info from "./Components/Info";
import Interests from "./Components/Interests";
import "./App.css";


export default function App(){
  return(
    <main>
    <Info />
    <Buttons />
    <About />
    <Interests />
    <Footer />
    </main>
  )
}