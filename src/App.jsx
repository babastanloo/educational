import "./App.css";
import Navbar from "./component/navbar/Navbar";
import About from "./component/about/About";
import Home from "./component/home/Home";
import Popular from "./component/popular/Popular";
import Offer from "./component/offer/Offer";
import Blog from "./component/blog/Blog";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Popular />
      <Offer />
      <About />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
