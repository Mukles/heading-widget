import { useHeadlineSettings } from "@/store";
import type { WordStyle } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { Highlighter, Square, Underline } from "lucide-react";
import { Button } from "../ui/button";

export default function WordStylePanel() {
  const { selectedWord, settings, setSettings } = useHeadlineSettings();

  const toggleWordStyle = (word: string, styleType: keyof WordStyle) => {
    setSettings((prev) => ({
      ...prev,
      wordStyles: {
        ...prev.wordStyles,
        [word]: {
          ...prev.wordStyles[word],
          [styleType]: !prev.wordStyles[word]?.[styleType],
        },
      },
    }));
  };

  return (
    <AnimatePresence>
      {selectedWord && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-muted/50 rounded-lg"
        >
          <h4 className="font-medium mb-3">Style "{selectedWord}"</h4>
          <div className="flex gap-2">
            <Button
              variant={
                settings.wordStyles[selectedWord]?.highlight
                  ? "default"
                  : "outline"
              }
              size="sm"
              onClick={() => toggleWordStyle(selectedWord, "highlight")}
            >
              <Highlighter className="w-4 h-4 mr-1" />
              Highlight
            </Button>
            <Button
              variant={
                settings.wordStyles[selectedWord]?.underline
                  ? "default"
                  : "outline"
              }
              size="sm"
              onClick={() => toggleWordStyle(selectedWord, "underline")}
            >
              <Underline className="w-4 h-4 mr-1" />
              Underline
            </Button>
            <Button
              variant={
                settings.wordStyles[selectedWord]?.background
                  ? "default"
                  : "outline"
              }
              size="sm"
              onClick={() => toggleWordStyle(selectedWord, "background")}
            >
              <Square className="w-4 h-4 mr-1" />
              Background
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
