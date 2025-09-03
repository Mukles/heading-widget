import type { useHeadlineSettings } from "@/store";

export const getWordStyle = (
  word: string,
  settings: ReturnType<typeof useHeadlineSettings>["settings"]
): React.CSSProperties => {
  const wordStyle = settings.wordStyles[word];
  if (!wordStyle) return {};

  let textColor = "inherit";

  if (wordStyle.highlight || wordStyle.background) {
    if (settings.gradientEnabled) {
      textColor = settings.gradientColors[0];
    } else {
      textColor = settings.gradientColors[0];
    }

    if (wordStyle.highlight) {
      textColor = "#1f2937";
    } else if (wordStyle.background) {
      textColor = settings.gradientEnabled
        ? settings.gradientColors[0]
        : settings.gradientColors[0];
    }
  }

  return {
    backgroundColor: wordStyle.highlight
      ? "#fef08a"
      : wordStyle.background
      ? "#e5e7eb"
      : "transparent",
    textDecoration: wordStyle.underline ? "underline" : "none",
    textDecorationColor: wordStyle.underline
      ? settings.gradientColors[0]
      : "inherit",
    textDecorationThickness: "2px",
    padding: wordStyle.background ? "2px 6px" : "0",
    borderRadius: wordStyle.background ? "4px" : "0",
    color: textColor,
    WebkitTextFillColor:
      wordStyle.highlight || wordStyle.background ? textColor : "inherit",
    transition: `all ${settings.hoverTransitionDuration}ms ${settings.transitionTiming}`,
  };
};

export const getAnimationClass = (
  settings: ReturnType<typeof useHeadlineSettings>["settings"]
) => {
  const baseClass = settings.hoverEffect
    ? "hover:scale-105 transition-transform duration-300"
    : "";

  switch (settings.animation) {
    case "fade-in":
      return `animate-fade-in ${baseClass}`;
    case "slide-up":
      return `animate-slide-in-up ${baseClass}`;
    case "bounce":
      return `animate-bounce-in ${baseClass}`;
    case "glow":
      return `animate-pulse ${baseClass}`;
    case "wave":
      return `animate-wave ${baseClass}`;
    case "typewriter":
      return `animate-typewriter ${baseClass}`;
    default:
      return baseClass;
  }
};

export const getHeadlineStyle = (
  settings: ReturnType<typeof useHeadlineSettings>["settings"]
) => {
  const baseStyle: React.CSSProperties = {
    fontSize: `${settings.fontSize}px`,
    fontWeight: settings.fontWeight,
    fontFamily: settings.fontFamily,
    letterSpacing: `${settings.letterSpacing}em`,
    lineHeight: settings.lineHeight,
    textAlign: settings.textAlign as any,
    textShadow: settings.textShadow ? "0 4px 8px rgba(0,0,0,0.3)" : "none",
    WebkitTextStroke: settings.textStroke
      ? `${settings.strokeWidth}px ${settings.strokeColor}`
      : "none",
  };

  if (settings.gradientEnabled) {
    return {
      ...baseStyle,
      backgroundImage: `linear-gradient(${settings.gradientDirection}, ${settings.gradientColors[0]}, ${settings.gradientColors[1]})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      color: "transparent",
    };
  }

  return {
    ...baseStyle,
    color: settings.gradientColors[0],
  };
};
