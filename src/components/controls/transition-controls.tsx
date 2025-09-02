import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { transitionTimings } from "@/constants";
import { useHeadlineSettings } from "@/store";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function Transition() {
  const { settings, updateSetting } = useHeadlineSettings();
  return (
    <>
      <div>
        <Label>Transition Duration: {settings.transitionDuration}ms</Label>
        <Slider
          value={[settings.transitionDuration]}
          onValueChange={([value]) =>
            updateSetting("transitionDuration", value)
          }
          min={50}
          max={2000}
          step={50}
          className="mt-2"
        />
      </div>

      <div>
        <Label>Transition Timing</Label>
        <Select
          value={settings.transitionTiming}
          onValueChange={(value) => updateSetting("transitionTiming", value)}
        >
          <SelectTrigger className="mt-2">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {transitionTimings.map((timing) => (
              <SelectItem key={timing.value} value={timing.value}>
                {timing.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Transition Delay: {settings.transitionDelay}ms</Label>
        <Slider
          value={[settings.transitionDelay]}
          onValueChange={([value]) => updateSetting("transitionDelay", value)}
          min={0}
          max={1000}
          step={50}
          className="mt-2"
        />
      </div>

      <Separator />

      <div>
        <Label>
          Hover Transition Duration: {settings.hoverTransitionDuration}ms
        </Label>
        <Slider
          value={[settings.hoverTransitionDuration]}
          onValueChange={([value]) =>
            updateSetting("hoverTransitionDuration", value)
          }
          min={50}
          max={1000}
          step={25}
          className="mt-2"
        />
      </div>

      <div className="p-4 bg-muted/50 rounded-lg">
        <h4 className="font-medium mb-2">Transition Preview</h4>
        <p className="text-sm text-muted-foreground mb-3">
          Test your transition settings by changing any style property above.
        </p>
        <div className="flex gap-2">
          <Button
            size="sm"
            onClick={() =>
              updateSetting("fontSize", settings.fontSize === 48 ? 64 : 48)
            }
            variant="outline"
          >
            Toggle Size
          </Button>
          <Button
            size="sm"
            onClick={() =>
              updateSetting(
                "gradientColors",
                settings.gradientColors[0] === "#be123c"
                  ? ["#3b82f6", "#8b5cf6"]
                  : ["#be123c", "#ec4899"]
              )
            }
            variant="outline"
          >
            Toggle Colors
          </Button>
        </div>
      </div>
    </>
  );
}
