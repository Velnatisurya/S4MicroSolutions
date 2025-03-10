import React from "react";
import "./App.css";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import Home from "../src/components/home";
import About from "../src/components/about";
import Services from "../src/components/services";
import Contact from "../src/components/contact";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
