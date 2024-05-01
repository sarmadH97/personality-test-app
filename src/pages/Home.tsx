import Background from "../components/Background";
import Flipcard from "../components/Flipcard";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-white">
      <Background />
      <div className="absolute inset-0">
        <>
          <Navbar />
        </>
        <div className="px-16 rounded-lg mt-12 h-80 w-full">
          <div className="p-6 w-full flex flex-col items-center">
            <p className="text-6xl uppercase pb-8 text-center">Are you</p>
            <p className="text-6xl uppercase pb-8 text-center">an</p>
            <Flipcard frontText="Introvert ?" backtext="Extrovert ?" />
          </div>
          <div className="p-6">
            <h1 className="text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text pb-6">
              Welcome to Persona Probe!
            </h1>
            <p className="text-xl pb-4">
              Unlock the mysteries of your personality with our innovative
              personality test app. Dive deep into the fascinating realms of
              your psyche and discover what makes you unique. Whether you're
              curious about your strengths, quirks, or hidden talents,
              PersonaProbe is your trusted companion on the journey of
              self-discovery.
            </p>
            <p className="text-xl pb-4">
              Our carefully crafted personality assessments are designed by
              experts in psychology, ensuring accuracy and reliability. Through
              engaging and insightful questions, you'll gain valuable insights
              into your character, preferences, and behavior patterns.
            </p>
            <p className="text-xl">
              Join millions of users worldwide who have embarked on the
              adventure of self-awareness with PersonaProbe. Start your journey
              today and uncover the layers of your personality waiting to be
              explored.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
