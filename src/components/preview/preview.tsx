import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getAnimationClass, getHeadlineStyle } from "@/lib/style-helper";
import { useHeadlineSettings } from "@/store";
import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw, Sparkles } from "lucide-react";
import ExportSettings from "./export-settings";
import HeadlineRenderer from "./headline-renderer";
import WordStylePanel from "./word-styling-panel";

export default function Preview() {
  const { settings, resetSettings } = useHeadlineSettings();

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
            onClick={resetSettings}
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
          <AnimatePresence mode="wait">
            <motion.div
              key={settings.text + settings.animation}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`${getAnimationClass(settings)} text-balance`}
              style={getHeadlineStyle(settings)}
            >
              <HeadlineRenderer />
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Word Style Panel */}
        <WordStylePanel />
        {/* Export Section */}
        <ExportSettings />
      </Card>
    </motion.div>
  );
}
