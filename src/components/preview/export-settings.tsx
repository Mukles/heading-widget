import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useHeadlineSettings } from "@/store";
import type { ExportFormat } from "@/types";
import { Copy, Download } from "lucide-react";

export default function ExportSettings() {
  const { exportFormat, updateSetting } = useHeadlineSettings();
  return (
    <div className="mt-6 pt-6 border-t">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium">Export Settings</h3>
        <Select
          value={exportFormat}
          onValueChange={(value) => {
            updateSetting("exportFormat", value as ExportFormat);
          }}
        >
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
  );
}
