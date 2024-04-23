import "./App.css";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen bg-white">
        <Background />
        <div className="absolute inset-0">
          <div>
            <Navbar />
          </div>
          <div className="">
            <Home />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
