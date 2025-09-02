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
import { useHeadlineSettings } from "@/store";

export default function EffectsControls() {
  const { settings, updateSetting } = useHeadlineSettings();
  return (
    <>
      <div>
        <Label>Animation</Label>
        <Select
          value={settings.animation}
          onValueChange={(value) => {
            updateSetting("animation", value);
          }}
        >
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
        <Switch
          checked={settings.perLetterAnimation}
          onCheckedChange={(checked) =>
            updateSetting("perLetterAnimation", checked)
          }
        />
      </div>

      <div className="flex items-center justify-between">
        <Label>Hover Effect</Label>
        <Switch
          checked={settings.hoverEffect}
          onCheckedChange={(checked) => updateSetting("hoverEffect", checked)}
        />
      </div>

      <div className="flex items-center justify-between">
        <Label>Text Shadow</Label>
        <Switch
          checked={settings.textShadow}
          onCheckedChange={(checked) => updateSetting("textShadow", checked)}
        />
      </div>

      <div className="flex items-center justify-between">
        <Label>Text Stroke</Label>
        <Switch
          checked={settings.textStroke}
          onCheckedChange={(checked) => updateSetting("textStroke", checked)}
        />
      </div>

      {settings.textStroke && (
        <div className="space-y-4">
          <div>
            <Label>Stroke Width: {10}px</Label>
            <Slider
              value={[settings.strokeWidth]}
              onValueChange={([value]) => updateSetting("strokeWidth", value)}
              min={1}
              max={5}
              step={0.5}
              className="mt-2"
            />
          </div>
          <div>
            <Label>Stroke Color</Label>
            <div className="flex items-center gap-2 mt-2">
              <Input
                type="color"
                value={settings.strokeColor}
                onChange={(e) => updateSetting("strokeColor", e.target.value)}
                className="w-12 h-10 p-1 border rounded"
              />
              <Input
                value={settings.strokeColor}
                onChange={(e) => updateSetting("strokeColor", e.target.value)}
                className="flex-1"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
