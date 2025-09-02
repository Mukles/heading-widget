export interface WordStyle {
  highlight: boolean;
  underline: boolean;
  background: boolean;
  color?: string;
}

export interface HeadlineSettings {
  text: string;
  fontSize: number;
  fontWeight: string;
  fontFamily: string;
  letterSpacing: number;
  lineHeight: number;
  gradientEnabled: boolean;
  gradientDirection: string;
  gradientColors: [string, string];
  textShadow: boolean;
  textStroke: boolean;
  strokeWidth: number;
  strokeColor: string;
  animation: string;
  textAlign: string;
  hoverEffect: boolean;
  perLetterAnimation: boolean;
  wordStyles: { [key: string]: WordStyle };
}
