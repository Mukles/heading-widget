import { useHeadlineSettings } from "@/store";
import { motion } from "framer-motion";

export default function HeadlineRenderer() {
  const { settings } = useHeadlineSettings();
  const shouldRender =
    settings.perLetterAnimation &&
    (settings.animation === "wave" || settings.animation === "typewriter");

  if (!shouldRender) {
    return null;
  }

  return settings.text.split("").map((char, index) => (
    <motion.span
      key={index}
      initial={{
        opacity: settings.animation === "typewriter" ? 0 : 1,
        y: settings.animation === "wave" ? 0 : 20,
      }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: settings.animation === "typewriter" ? index * 0.1 : index * 0.05,
        duration: 0.5,
      }}
      style={{ display: "inline-block" }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));
}
