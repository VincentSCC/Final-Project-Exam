import Navbar from "./components/navbar/Navbar.js";
import Header from "./components/header/Header.js";
import About from "./components/content1/About.js";
import Works from "./components/works/Works.js";
import Footer from "./components/footer/Footer.js";

function App() {
  return (<>
    <Navbar/>
    <header>
      <Header/>
    </header>
    <section>
      <About/>
    </section>
    <section>
      <Works/>
    </section>
    <footer>
      <Footer/>
    </footer>
    </>
  );
}

export default App;
