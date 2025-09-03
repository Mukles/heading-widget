import {
  EffectsControls,
  StyleControls,
  TextControls,
  TransitionControls,
} from "@/components/controls";
import { Palette, Sparkles, Timer, Type } from "lucide-react";

export const controlsTabs = [
  {
    label: "Text",
    icon: Type,
    value: "text",
    content: TextControls,
  },
  {
    label: "Style",
    icon: Palette,
    value: "style",
    content: StyleControls,
  },
  {
    label: "Effects",
    icon: Sparkles,
    value: "effects",
    content: EffectsControls,
  },
  {
    label: "Transition",
    icon: Timer,
    value: "transition",
    content: TransitionControls,
  },
];
