
# Heading Widget

A customizable headline widget built with React and Vite.

## Features
- Customizable headline text
- Style controls (font, color, size, underline, highlight, etc.)
- Individual word underline and highlight
- Per-word background color control with transitions
- Animation and effects
- Live preview
- Export settings

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd heading-widget
npm install
```

### Running the App

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Building for Production

```bash
npm run build
```

### Project Structure
- `src/components/` - React components
- `src/store/` - State management
- `src/constants/` - Constants (fonts, gradients, etc.)
- `src/hooks/` - Custom hooks
- `src/lib/` - Utility functions
- `src/types/` - TypeScript types


## Troubleshooting

### Gradient or Text Disappears
If you toggle the gradient on/off and the text or gradient colors disappear:
- Make sure you have valid color values set for both start and end colors in the gradient controls.
- If you turn off the gradient, the text color will default to the start color.
- If you turn the gradient back on and colors are missing, reset them to your preferred values.


### Animations and Transitions
Font size, color, and background color changes are smoothly animated. You can also control the transition speed and timing for these properties in the app settings (look for transition duration and timing controls). If you do not see animations, ensure your browser supports CSS transitions and you are not overriding styles elsewhere.

---

MIT
