import "./App.css";
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
      </div>
      <Footer />
    </>
  );
}

export default App;
