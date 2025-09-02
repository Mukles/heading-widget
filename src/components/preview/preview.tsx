import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useHeadlineSettings } from "@/store";
import { motion } from "framer-motion";
import { RotateCcw, Sparkles } from "lucide-react";
import ExportSettings from "./export-settings";
import HeadlineRenderer from "./headline-renderer";

export default function Preview() {
  const { settings, selectedWord, setSelectedWord } = useHeadlineSettings();

  const renderHeadline = () => {
    if (
      settings.perLetterAnimation &&
      (settings.animation === "wave" || settings.animation === "typewriter")
    ) {
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

    return settings.text.split(" ").map((word, index) => (
      <span
        key={index}
        className={
          selectedWord === word
            ? "cursor-pointer ring-2 ring-primary ring-offset-2 rounded"
            : "cursor-pointer"
        }
      >
        {word}
        {index < settings.text.split(" ").length - 1 && " "}
      </span>
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Card className="p-8 h-fit">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Live Preview
          </h2>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 bg-transparent"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </Button>
        </div>

        {/* Preview Area */}
        <div className="min-h-[200px] flex items-center justify-center bg-gradient-to-br from-muted/30 to-card/50 rounded-lg p-8 border-2 border-dashed border-border">
          <HeadlineRenderer />
        </div>

        {/* Export Section */}
        <ExportSettings />
      </Card>
    </motion.div>
  );
}
