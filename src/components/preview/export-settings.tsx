import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useHeadlineSettings } from "@/store";
import type { ExportFormat } from "@/types";
import { Check, Copy, Download } from "lucide-react";
import { useState } from "react";

export default function ExportSettings({ className }: { className?: string }) {
  const { exportFormat, updateSetting, settings } = useHeadlineSettings();
  const [copySuccess, setCopySuccess] = useState(false);

  // Export headline widget settings in various formats, including transitions
  function exportSettings(settings: any, exportFormat: string) {
    let exportData = "";

    switch (exportFormat) {
      case "json":
        exportData = JSON.stringify(settings, null, 2);
        break;
      case "css":
        exportData = `
.headline {
  font-size: ${settings.fontSize}px;
  font-weight: ${settings.fontWeight};
  font-family: '${settings.fontFamily}', sans-serif;
  letter-spacing: ${settings.letterSpacing}em;
  line-height: ${settings.lineHeight};
  text-align: ${settings.textAlign};
  ${settings.textShadow ? "text-shadow: 0 4px 8px rgba(0,0,0,0.3);" : ""}
  ${
    settings.textStroke
      ? `-webkit-text-stroke: ${settings.strokeWidth}px ${settings.strokeColor};`
      : ""
  }
  ${
    settings.gradientEnabled
      ? `
  background-image: linear-gradient(${settings.gradientDirection}, ${settings.gradientColors[0]}, ${settings.gradientColors[1]});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;`
      : `color: ${settings.gradientColors[0]};`
  }
  transition: all ${settings.transitionDuration}ms ${
          settings.transitionTiming
        } ${settings.transitionDelay}ms;
}

@keyframes wave {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-wave span {
  display: inline-block;
  animation: wave 2s ease-in-out infinite;
}

.animate-wave span:nth-child(even) {
  animation-delay: 0.1s;
}`.trim();
        break;
      case "jsx":
        exportData = `
<h1 style={{
  fontSize: '${settings.fontSize}px',
  fontWeight: '${settings.fontWeight}',
  fontFamily: '${settings.fontFamily}, sans-serif',
  letterSpacing: '${settings.letterSpacing}em',
  lineHeight: ${settings.lineHeight},
  textAlign: '${settings.textAlign}',
  ${settings.textShadow ? `textShadow: '0 4px 8px rgba(0,0,0,0.3)',` : ""}
  ${
    settings.textStroke
      ? `WebkitTextStroke: '${settings.strokeWidth}px ${settings.strokeColor}',`
      : ""
  }
  ${
    settings.gradientEnabled
      ? `
  backgroundImage: 'linear-gradient(${settings.gradientDirection}, ${settings.gradientColors[0]}, ${settings.gradientColors[1]})',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent'`
      : `color: '${settings.gradientColors[0]}'`
  },
  transition: 'all ${settings.transitionDuration}ms ${
          settings.transitionTiming
        } ${settings.transitionDelay}ms',
}}>
  ${settings.text}
</h1>`.trim();
        break;
      case "embed":
        exportData = `
 Headline Widget Embed Code 
<div class="headline-widget">
  <style>
    .headline-widget h1 {
      font-size: ${settings.fontSize}px;
      font-weight: ${settings.fontWeight};
      font-family: '${settings.fontFamily}', sans-serif;
      letter-spacing: ${settings.letterSpacing}em;
      line-height: ${settings.lineHeight};
      text-align: ${settings.textAlign};
      margin: 0;
      ${settings.textShadow ? "text-shadow: 0 4px 8px rgba(0,0,0,0.3);" : ""}
      ${
        settings.textStroke
          ? `-webkit-text-stroke: ${settings.strokeWidth}px ${settings.strokeColor};`
          : ""
      }
      ${
        settings.gradientEnabled
          ? `
      background-image: linear-gradient(${settings.gradientDirection}, ${settings.gradientColors[0]}, ${settings.gradientColors[1]});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;`
          : `color: ${settings.gradientColors[0]};`
      }
      transition: all ${settings.transitionDuration}ms ${
          settings.transitionTiming
        } ${settings.transitionDelay}ms;
    }
  </style>
  <h1>${settings.text}</h1>
</div>`.trim();
        break;
    }

    return exportData;
  }

  const generateExportData = (): string => {
    return exportSettings(settings, exportFormat);
  };

  const handleCopy = async () => {
    try {
      const exportData = generateExportData();
      await navigator.clipboard.writeText(exportData);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      // Fallback for older browsers
      fallbackCopy(generateExportData());
    }
  };

  const handleDownload = () => {
    const exportData = generateExportData();
    const fileExtensions = {
      json: "json",
      css: "css",
      jsx: "jsx",
      embed: "html",
    };

    const extension = fileExtensions[exportFormat] || "txt";
    const filename = `headline-export.${extension}`;

    const blob = new Blob([exportData], {
      type: exportFormat === "json" ? "application/json" : "text/plain",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Fallback copy method for older browsers
  const fallbackCopy = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error("Fallback copy failed:", error);
    }

    document.body.removeChild(textArea);
  };

  const exportOptions = [
    { value: "json", label: "JSON", description: "Configuration data" },
    { value: "css", label: "CSS", description: "Stylesheet rules" },
    { value: "jsx", label: "JSX", description: "React component" },
    { value: "embed", label: "Embed", description: "HTML widget" },
  ];

  return (
    <div className={cn("mt-6 pt-6 border-t", className)}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-medium">Export Settings</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Export your headline configuration in different formats
          </p>
        </div>
        <Select
          value={exportFormat}
          onValueChange={(value) => {
            updateSetting("exportFormat", value as ExportFormat);
          }}
        >
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {exportOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                <div className="flex flex-col group">
                  <span>{option.label}</span>
                  <span className="text-xs text-muted-foreground group-hover:text-muted">
                    {option.description}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-2">
        <Button
          onClick={handleCopy}
          className="flex-1 flex items-center gap-2"
          disabled={copySuccess}
        >
          {copySuccess ? (
            <>
              <Check className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy
            </>
          )}
        </Button>
        <Button
          onClick={handleDownload}
          variant="outline"
          className="flex items-center gap-2 bg-transparent"
        >
          <Download className="w-4 h-4" />
          Download
        </Button>
      </div>
    </div>
  );
}
