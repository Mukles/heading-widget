import { animations, fontFamilies } from "@/constants";
import type { ReactNode } from "react";
import React, { createContext, useContext, useState } from "react";
import type { HeadlineSettings } from "../types";

const defaultHeadlineSettings: HeadlineSettings = {
  text: "Create Amazing Headlines",
  fontSize: 48,
  fontWeight: "700",
  fontFamily: fontFamilies[0],
  letterSpacing: -0.02,
  lineHeight: 1.1,
  gradientEnabled: true,
  gradientDirection: "to right",
  gradientColors: ["#be123c", "#ec4899"],
  textShadow: false,
  textStroke: false,
  strokeWidth: 1,
  strokeColor: "#000000",
  animation: animations[1].value,
  textAlign: "center",
  hoverEffect: false,
  perLetterAnimation: false,
  wordStyles: {},
  exportFormat: "json",
  transitionDuration: 300,
  transitionTiming: "ease-in-out",
  transitionDelay: 0,
  hoverTransitionDuration: 200,
  updateSetting: () => {},
};

interface HeadlineSettingsContextProps {
  settings: HeadlineSettings;
  setSettings: React.Dispatch<React.SetStateAction<HeadlineSettings>>;
  selectedWord: string | null;
  setSelectedWord: React.Dispatch<React.SetStateAction<string | null>>;
  readonly resetSettings: () => void;
  updateSetting: <K extends keyof HeadlineSettings>(
    key: K,
    value: HeadlineSettings[K]
  ) => void;
  updateWordColor: (
    word: string,
    colorType: "highlight" | "background" | "text",
    color: string
  ) => void;
}

const HeadlineSettingsContext = createContext<
  HeadlineSettingsContextProps | undefined
>(undefined);

export const HeadlineSettingsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [settings, setSettings] = useState<HeadlineSettings>(
    defaultHeadlineSettings
  );

  const resetSettings = () => {
    setSettings(defaultHeadlineSettings);
    setSelectedWord(null);
  };

  const updateSetting = <K extends keyof HeadlineSettings>(
    key: K,
    value: HeadlineSettings[K]
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const updateWordColor = (
    word: string,
    colorType: "highlight" | "background" | "text",
    color: string
  ) => {
    setSettings((prev) => ({
      ...prev,
      wordStyles: {
        ...prev.wordStyles,
        [word]: {
          ...prev.wordStyles[word],
          [`${colorType}Color`]: color,
        },
      },
    }));
  };

  return React.createElement(
    HeadlineSettingsContext.Provider,
    {
      value: {
        settings,
        setSettings,
        selectedWord,
        setSelectedWord,
        resetSettings,
        updateSetting,
        updateWordColor,
      },
    },
    children
  );
};

export const useHeadlineSettings = () => {
  const context = useContext(HeadlineSettingsContext);
  if (!context) {
    throw new Error(
      "useHeadlineSettings must be used within a HeadlineSettingsProvider"
    );
  }
  // Add exportFormat for convenience
  return {
    ...context,
    exportFormat: context.settings.exportFormat,
  };
};
