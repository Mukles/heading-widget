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

export default function TextControls() {
  return (
    <>
      <div>
        <Label htmlFor="headline-text">Headline Text</Label>
        <Input
          id="headline-text"
          placeholder="Enter your headline..."
          className="mt-2"
        />
      </div>

      <div>
        <Label id="font-family-label">Font Family</Label>
        <Select aria-labelledby="font-family-label">
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
        <Select aria-labelledby="font-weight">
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
        <Label>Font Size: {16}px</Label>
        <Slider min={16} max={120} step={1} className="mt-2" />
      </div>
    </>
  );
}
