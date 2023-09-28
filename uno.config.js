// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    transformerDirectives,
  } from "unocss";
  
  export default defineConfig({
    shortcuts: [
      // ...
    ],
    theme: {
        colors: {
            brand: {
              dark: "#141414",
              bluedark: "#1B233D",
              litedark: "#616163",
              blue: "#120B48",
              grey: "#F4F6F8",
              white: "#fff",
            },
          },
      extend: {
        fontFamily: {
          // Define the default font for the entire application
          sans: ["'Sora'", "sans"],
        },
      },
    },
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons(),
      presetTypography(),
    ],
    transformers: [transformerDirectives()],
  });
  