import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			poppins: [
  				'var(--font-poppins)',
  				'sans-serif'
  			],
  			outfit: [
  				'var(--font-outfit)',
  				'sans-serif'
  			]
  		},
  		colors: {
  			ccOffBlue: '#055160',
			sGreen: '#0B7A54',
			sGreen2: '#E7F2EF',
			sYellow: '#F4C34A',
			sYellow2: '#FEF9ED',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',

  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		keyframes: {
		"fade-in": {
			"0%": { opacity: "0", transform: "translateY(20px)" },
			"100%": { opacity: "1", transform: "translateY(0)" },
		},
		"typing": {
			"from": { width: "0" },
			"to": { width: "100%" },
		},
		"blink-caret": {
			"from, to": { borderColor: "transparent" },
			"50%": { borderColor: "black" },
		},
		},
		animation: {
		"fade-in": "fade-in 1s ease-out forwards",
		typing: "typing 2s steps(20) 1s forwards, blink-caret 0.75s step-end infinite",
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
