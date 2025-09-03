import { getWordStyle } from "@/lib/style-helper";
import { useHeadlineSettings } from "@/store";
import { motion } from "framer-motion";

export default function HeadlineRenderer() {
  const { settings, selectedWord, setSelectedWord } = useHeadlineSettings();
  const shouldRender =
    settings.perLetterAnimation &&
    (settings.animation === "wave" || settings.animation === "typewriter");

  if (shouldRender) {
    return settings.text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{
          opacity: settings.animation === "typewriter" ? 0 : 1,
          y: settings.animation === "wave" ? 0 : 20,
        }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay:
            settings.animation === "typewriter" ? index * 0.1 : index * 0.05,
          duration: 0.5,
        }}
        style={{ display: "inline-block" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  }

  return settings.text.split(" ").map((word, index) => {
    const wordStyle = settings.wordStyles[word];

    const WordComponent = ({ children, ...props }: any) => {
      if (wordStyle?.highlight) {
        return <mark {...props}>{children}</mark>;
      }
      if (wordStyle?.background) {
        return (
          <span {...props} role="mark" aria-label="highlighted text">
            {children}
          </span>
        );
      }
      return <span {...props}>{children}</span>;
    };

    return (
      <WordComponent
        key={index}
        style={getWordStyle(word, settings)}
        onClick={() => setSelectedWord(selectedWord === word ? null : word)}
        className={
          selectedWord === word
            ? "cursor-pointer ring-2 ring-primary ring-offset-2 rounded"
            : "cursor-pointer hover:bg-muted/20 rounded transition-colors"
        }
      >
        {word}
        {index < settings.text.split(" ").length - 1 && " "}
      </WordComponent>
    );
  });
}
