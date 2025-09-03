import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { highlightColors } from "@/constants";
import { useHeadlineSettings } from "@/store";
import { AnimatePresence } from "framer-motion";

export default function HighlightColor() {
  const { settings, selectedWord, updateWordColor } = useHeadlineSettings();

  return (
    <AnimatePresence>
      {selectedWord && settings.wordStyles[selectedWord]?.highlight && (
        <div>
          <Label className="text-sm font-medium">Highlight Color</Label>
          <div className="flex gap-2 mt-2">
            {highlightColors.map((color) => (
              <button
                key={color.value}
                onClick={() =>
                  updateWordColor(selectedWord, "highlight", color.value)
                }
                className="w-8 h-8 rounded border-2 border-border hover:border-primary transition-colors"
                style={{ backgroundColor: color.value }}
                title={color.name}
              />
            ))}
            <Input
              type="color"
              value={
                settings.wordStyles[selectedWord]?.highlightColor || "#fef08a"
              }
              onChange={(e) =>
                updateWordColor(selectedWord, "highlight", e.target.value)
              }
              className="w-8 h-8 p-0 border-2 border-border rounded"
            />
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
