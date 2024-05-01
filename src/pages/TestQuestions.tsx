import Background from "../components/Background";
import Navbar from "../components/Navbar";

const TestQuestions = () => {
  return (
    <>
      <div className="w-screen h-screen bg-white">
        <Background />
        <div className="absolute inset-0">
          <>
            <Navbar />
          </>
        </div>
      </div>
    </>
  );
};

export default TestQuestions;
