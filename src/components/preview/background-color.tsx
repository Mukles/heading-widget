import { AnimatePresence } from "framer-motion";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { backgroundColors } from "@/constants";
import { useHeadlineSettings } from "@/store";

export default function BackgroundColor() {
  const { settings, selectedWord, updateWordColor } = useHeadlineSettings();
  return (
    <AnimatePresence>
      {selectedWord && settings.wordStyles[selectedWord]?.background && (
        <div>
          <Label className="text-sm font-medium">Background Color</Label>
          <div className="flex gap-2 mt-2">
            {backgroundColors.map((color) => (
              <button
                key={color.value}
                onClick={() =>
                  updateWordColor(selectedWord, "background", color.value)
                }
                className="w-8 h-8 rounded border-2 border-border hover:border-primary transition-colors"
                style={{ backgroundColor: color.value }}
                title={color.name}
              />
            ))}
            <Input
              type="color"
              value={
                settings.wordStyles[selectedWord]?.backgroundColor || "#e5e7eb"
              }
              onChange={(e) =>
                updateWordColor(selectedWord, "background", e.target.value)
              }
              className="w-8 h-8 p-0 border-2 border-border rounded"
            />
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
