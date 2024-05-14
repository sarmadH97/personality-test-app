export function returnColoredText(text: string) {
  return (
    <p className="font-bold bg-gradient-to-r from-blue-500 to-cyan-500 inline-block text-transparent bg-clip-text ">
      {text}
    </p>
  );
}

export function returnType(intCount: number, extCount: number) {
  let type;
  if (intCount > extCount) {
    type = returnResults(
      "Introvert",
      "Introverts are individuals who tend to focus more on their internal thoughts and feelings, often feeling energized by spending time alone or in small groups. They may prefer solitary activities and may need time alone to recharge after social interactions."
    );
  } else if (extCount > intCount) {
    type = returnResults(
      "Extrovert",
      "Extroverts are individuals who thrive on social interactions and external stimuli. They often enjoy being around other people, feel energized by socializing, and are typically outgoing and expressive in social settings."
    );
  } else {
    type = returnResults(
      "Ambivert",
      "Ambiverts are individuals who exhibit characteristics of both introversion and extroversion. They can adapt to different social situations, sometimes enjoying being around others and other times preferring solitude. Ambiverts tend to possess a balanced mix of traits from both ends of the introversion-extroversion spectrum."
    );
  }
  return type;
}

export function returnResults(type: string, def: string) {
  return (
    <div className="flex flex-col">
      <p className="text-center p-8 text-3xl font-semibold">You are an</p>
      <div className="text-center text-8xl p-8">{returnColoredText(type)}</div>
      <p className="text-center p-10 text-2xl">{def}</p>
    </div>
  );
}
