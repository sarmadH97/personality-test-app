interface FlipcardProps {
  frontText: string;
  backtext: string;
}

const Flipcard = (props: FlipcardProps) => {
  return (
    <div className="text-blue-500 uppercase relative w-96 h-60 rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 card">
      <div className="backdrop-blur-md bg-cyan-100/30 md:text-6xl sm:text-sm absolute inset-0 w-full h-full flex justify-center items-center transition-all duration-100 delay-200 z-20 hover:opacity-0">
        {props.frontText}
      </div>
      <div className="backdrop-blur-md bg-cyan-100/30 md:text-6xl sm:text-sm absolute inset-0 w-full h-full flex justify-center items-center transition-all z-10 card-back">
        {props.backtext}
      </div>
    </div>
  );
};

export default Flipcard;
