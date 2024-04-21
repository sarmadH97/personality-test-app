import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen bg-white">
        <div>
          <Navbar />
        </div>
        <div>
          <Home />
        </div>
        
      </div>
    </>
  );
};

export default App;
