import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { Copy, Download, RotateCcw, Sparkles } from "lucide-react";

export default function Preview() {
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

        <div className="min-h-[200px] flex items-center justify-center bg-gradient-to-br from-muted/30 to-card/50 rounded-lg p-8 border-2 border-dashed border-border"></div>

        {/* Export Section */}
        <div className="mt-6 pt-6 border-t">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Export Settings</h3>
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="json">JSON</SelectItem>
                <SelectItem value="css">CSS</SelectItem>
                <SelectItem value="jsx">JSX</SelectItem>
                <SelectItem value="embed">Embed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2">
            <Button className="flex-1 flex items-center gap-2">
              <Copy className="w-4 h-4" />
              Copy
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-transparent"
            >
              <Download className="w-4 h-4" />
              Download
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
