
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Solo Leveling theme colors
				"solo": {
          "blue": "#00DDFF",
          "purple": "#7F5AF0",
          "dark": "#121212",
          "darker": "#0E0E16",
          "accent": "#00BFFF",
          "muted": "#2D2D3A",
          "success": "#00FF95",
          "warning": "#FFD600",
          "danger": "#FF5F5F",
        },
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"pulse-glow": {
					"0%, 100%": { 
						opacity: "1",
						boxShadow: "0 0 20px 2px var(--glow-color, rgba(0, 191, 255, 0.7))"
					},
					"50%": { 
						opacity: "0.7",
						boxShadow: "0 0 10px 1px var(--glow-color, rgba(0, 191, 255, 0.3))"
					}
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" }
				},
				"slide-up": {
					"0%": { transform: "translateY(20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				},
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" }
				},
				"notification-glow": {
					"0%, 100%": { boxShadow: "0 0 5px #00BFFF, 0 0 10px #00BFFF, 0 0 15px #00BFFF" },
					"50%": { boxShadow: "0 0 10px #00DDFF, 0 0 20px #00DDFF, 0 0 30px #00DDFF" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"pulse-glow": "pulse-glow 2s infinite",
				"float": "float 3s ease-in-out infinite",
				"slide-up": "slide-up 0.6s ease-out",
				"fade-in": "fade-in 0.4s ease-out",
				"notification-glow": "notification-glow 2s infinite"
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': "url('/public/lovable-uploads/14e997ce-b0c3-4d81-9567-44830a2a8e44.png')",
        'hero-pattern': 'linear-gradient(to bottom, rgba(14, 14, 22, 0.9), rgba(14, 14, 22, 0.5)), url("/public/lovable-uploads/14e997ce-b0c3-4d81-9567-44830a2a8e44.png")',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
