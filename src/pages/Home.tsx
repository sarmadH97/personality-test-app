const Home = () => {
  return (
    <div className="px-16">
      <div className="rounded-lg mt-12 h-80 w-full bg-gradient-to-r from-cyan-100 to-blue-100">
        <h1>About our test</h1>
        <p>
          In 1947, a psychologist named Ross Stagner asked a number of personnel
          managers to take a personality test. After they had taken the test,
          Stagner, presented each of them with feedback. Each of the managers
          was then asked how accurate the assessment of him or her was. More
          than half described the assessment as accurate, and almost none
          described it as wrong. On average, the students rated its accuracy as
          4.30 on a scale of 0 (very poor) to 5 (excellent).
        </p>
      </div>
      <div className="bg-gray-50 h-full flex items-center justify-center px-16">
        <div className="relative w-full max-w-lg">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
