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
import { useHeadlineSettings } from "@/store";

export default function StyleControls() {
  const { settings, updateSetting } = useHeadlineSettings();
  return (
    <>
      <div>
        <Label>Letter Spacing:{settings.letterSpacing}em</Label>
        <Slider
          onValueChange={(value) => {
            updateSetting("letterSpacing", value[0]);
          }}
          value={[settings.letterSpacing]}
          min={-0.1}
          max={0.2}
          step={0.01}
          className="mt-2"
        />
      </div>

      <div>
        <Label>Line Height: {settings.lineHeight}</Label>
        <Slider
          onValueChange={(value) => {
            updateSetting("lineHeight", value[0]);
          }}
          value={[settings.lineHeight]}
          min={0.8}
          max={2}
          step={0.1}
          className="mt-2"
        />
      </div>

      <div>
        <Label>Text Alignment</Label>
        <Select
          value={settings.textAlign}
          onValueChange={(value) => {
            updateSetting("textAlign", value);
          }}
        >
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
        <Switch
          checked={settings.gradientEnabled}
          onCheckedChange={(checked) =>
            updateSetting("gradientEnabled", checked)
          }
        />
      </div>

      {settings.gradientEnabled && (
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
                    onClick={() =>
                      updateSetting("gradientDirection", direction.value)
                    }
                    variant={
                      settings.gradientDirection === direction.value
                        ? "default"
                        : "outline"
                    }
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
                <Input
                  value={settings.gradientColors[0]}
                  onChange={(e) => {
                    updateSetting("gradientColors", [
                      settings.gradientColors[0],
                      e.target.value,
                    ]);
                  }}
                  type="color"
                  className="w-12 h-10 p-1 border rounded"
                />
                <Input
                  value={settings.gradientColors[0]}
                  onChange={(e) => {
                    updateSetting("gradientColors", [
                      settings.gradientColors[0],
                      e.target.value,
                    ]);
                  }}
                  className="flex-1"
                />
              </div>
            </div>
            <div>
              <Label>End Color</Label>
              <div className="flex items-center gap-2 mt-2">
                <Input
                  value={settings.gradientColors[1]}
                  onChange={(e) => {
                    updateSetting("gradientColors", [
                      settings.gradientColors[1],
                      e.target.value,
                    ]);
                  }}
                  type="color"
                  className="w-12 h-10 p-1 border rounded"
                />
                <Input
                  value={settings.gradientColors[1]}
                  onChange={(e) => {
                    updateSetting("gradientColors", [
                      settings.gradientColors[1],
                      e.target.value,
                    ]);
                  }}
                  className="flex-1"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
