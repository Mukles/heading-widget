import type { ReactNode } from "react";
import React, { createContext, useContext, useState } from "react";
import type { HeadlineSettings } from "../types";

const defaultHeadlineSettings: HeadlineSettings = {
  text: "Your Headline",
  fontSize: 48,
  fontWeight: "bold",
  fontFamily: "Arial",
  letterSpacing: 0,
  lineHeight: 1.2,
  gradientEnabled: false,
  gradientDirection: "to right",
  gradientColors: ["#000000", "#ffffff"],
  textShadow: false,
  textStroke: false,
  strokeWidth: 1,
  strokeColor: "#000000",
  animation: "none",
  textAlign: "center",
  hoverEffect: false,
  perLetterAnimation: false,
  wordStyles: {},
};

interface HeadlineSettingsContextProps {
  settings: HeadlineSettings;
  setSettings: React.Dispatch<React.SetStateAction<HeadlineSettings>>;
  selectedWord: string | null;
  setSelectedWord: React.Dispatch<React.SetStateAction<string | null>>;
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
  return React.createElement(
    HeadlineSettingsContext.Provider,
    { value: { settings, setSettings, selectedWord, setSelectedWord } },
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
  return context;
};
