import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { animations } from "@/constants";

export default function EffectsControls() {
  return (
    <>
      <div>
        <Label>Animation</Label>
        <Select>
          <SelectTrigger className="mt-2">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {animations.map((animation) => (
              <SelectItem key={animation.value} value={animation.value}>
                {animation.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between">
        <Label>Per-Letter Animation</Label>
        <Switch />
      </div>

      <div className="flex items-center justify-between">
        <Label>Hover Effect</Label>
        <Switch />
      </div>

      <div className="flex items-center justify-between">
        <Label>Text Shadow</Label>
        <Switch />
      </div>

      <div className="flex items-center justify-between">
        <Label>Text Stroke</Label>
        <Switch />
      </div>

      {false && (
        <div className="space-y-4">
          <div>
            <Label>Stroke Width: {10}px</Label>
            <Slider value={[10]} min={1} max={5} step={0.5} className="mt-2" />
          </div>
          <div>
            <Label>Stroke Color</Label>
            <div className="flex items-center gap-2 mt-2">
              <Input type="color" className="w-12 h-10 p-1 border rounded" />
              <Input className="flex-1" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
