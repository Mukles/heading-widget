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
import { fontFamilies, fontWeights } from "@/constants";
import { useDebounce } from "@/hooks/use-debouce";
import { useHeadlineSettings } from "@/store";
import { useEffect, useState } from "react";

export default function TextControls() {
  const { settings, setSettings } = useHeadlineSettings();
  const [inputText, setInputText] = useState(settings.text);
  const debouncedValue = useDebounce(inputText);
  useEffect(() => {
    setSettings({ ...settings, text: debouncedValue });
  }, [debouncedValue]);

  return (
    <>
      <div>
        <Label htmlFor="headline-text">Headline Text</Label>
        <Input
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          value={inputText}
          id="headline-text"
          placeholder="Enter your headline..."
          className="mt-2"
        />
      </div>

      <div>
        <Label id="font-family-label">Font Family</Label>
        <Select
          value={settings.fontFamily}
          onValueChange={(value) => {
            setSettings({ ...settings, fontFamily: value });
          }}
          aria-labelledby="font-family-label"
        >
          <SelectTrigger className="mt-2">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {fontFamilies.map((font) => (
              <SelectItem key={font} value={font}>
                {font}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="font-weight">Font Weight</Label>
        <Select
          value={settings.fontWeight}
          onValueChange={(value) => {
            setSettings({ ...settings, fontWeight: value });
          }}
          aria-labelledby="font-weight"
        >
          <SelectTrigger className="mt-2">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {fontWeights.map((weight) => (
              <SelectItem key={weight.value} value={weight.value}>
                {weight.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Font Size: {settings.fontSize}px</Label>
        <Slider
          value={[settings.fontSize]}
          onValueChange={([value]) =>
            setSettings({ ...settings, fontSize: value })
          }
          min={16}
          max={120}
          step={1}
          className="mt-2"
        />
      </div>
    </>
  );
}
