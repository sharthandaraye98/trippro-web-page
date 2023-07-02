import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Challenge from "./components/Challenge";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Challenge />
      <Footer />
    </div>
  );
}

export default App;
