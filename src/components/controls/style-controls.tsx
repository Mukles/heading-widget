import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { gradientDirections } from "@/constants/gradients";

export default function StyleControls() {
  return (
    <>
      <div>
        <Label>Letter Spacing:{10}em</Label>
        <Slider value={[1]} min={-0.1} max={0.2} step={0.01} className="mt-2" />
      </div>

      <div>
        <Label>Line Height: {10}</Label>
        <Slider value={[10]} min={0.8} max={2} step={0.1} className="mt-2" />
      </div>

      <div>
        <Label>Text Alignment</Label>
        <Select>
          <SelectTrigger className="mt-2">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="left">Left</SelectItem>
            <SelectItem value="center">Center</SelectItem>
            <SelectItem value="right">Right</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      <div className="flex items-center justify-between">
        <Label>Gradient</Label>
        <Switch />
      </div>

      {false && (
        <div className="space-y-4">
          <div>
            <Label>Gradient Direction</Label>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {gradientDirections.map((direction) => {
                const Icon = direction.icon;
                return (
                  <Button
                    key={direction.value}
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <Icon className="w-3 h-3" />
                  </Button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Start Color</Label>
              <div className="flex items-center gap-2 mt-2">
                <Input type="color" className="w-12 h-10 p-1 border rounded" />
                <Input className="flex-1" />
              </div>
            </div>
            <div>
              <Label>End Color</Label>
              <div className="flex items-center gap-2 mt-2">
                <Input type="color" className="w-12 h-10 p-1 border rounded" />
                <Input className="flex-1" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
