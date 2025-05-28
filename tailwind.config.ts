import type { Config } from "tailwindcss";
import lineClamp from '@tailwindcss/line-clamp'

export default {
content: [
  "./src/**/*.{js,ts,jsx,tsx}",
]
,
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [lineClamp],
} satisfies Config;
