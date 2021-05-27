import './App.css';
//import componenets
import Header from"./components/Header";
import Navbar from "./components/Navbar.js";
//install and import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//install and import particles-js for header animation
import Particles from "react-particles-js"

function App() {
  return (
    <>
    <Particles 
      params={{
        Particles: {
          number: {
            value: 30, 
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color: "#f9ab00"
            }
          }
        }
      }}
    />
    <Navbar />
    <Header />
    </>
  );
}

export default App;
