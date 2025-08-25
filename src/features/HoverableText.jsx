const HoverableText = ({ text, className = "" }) => {
  const getRandomHighlightedLetters = (text) => {
    const letters = text.split("").map((char, index) => ({ char, index }));
    const nonSpaceLetters = letters.filter((item) => item.char !== " ");

    const numToHighlight = text.length <= 8 ? 1 : 2;
    const actualHighlight = Math.min(numToHighlight, nonSpaceLetters.length);

    const shuffled = [...nonSpaceLetters].sort(() => 0.5 - Math.random());
    const highlightedIndices = new Set(
      shuffled.slice(0, actualHighlight).map((item) => item.index)
    );

    return highlightedIndices;
  };

  const highlightedIndices = getRandomHighlightedLetters(text);

  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`inline-block ${
            highlightedIndices.has(index) ? "text-[#aaa]" : ""
          }`}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

export default HoverableText