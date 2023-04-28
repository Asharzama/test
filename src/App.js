import Details from "./components/Details";
import DishesSection from "./components/DishesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Details />
      <DishesSection />
      <Footer />
    </div>
  );
}

export default App;
