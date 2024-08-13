import "./App.css";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="app-container">
        <Header />
        <Categories />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
