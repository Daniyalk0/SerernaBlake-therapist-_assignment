import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const playFairDisplay = localFont({
  src: [
    {
      path: "./fonts/playfair-display-latin-400-normal.ttf",
      weight: "100 900", // full weight range
      style: "normal",
    },
  ],
  variable: "--font-play-fair",
  display: "swap",
});
const freightDisplayLight = localFont({
  src: [
    {
      path: "./fonts/FreightDispProBlack-Regular.ttf",
      weight: "100 900", // full weight range
      style: "normal",
    },
  ],
  variable: "--font-freight-display",
  display: "swap",
});

const ibmFont = localFont({
  src: [
    {
      path: "./fonts/IBMPlexSans-VariableFont_wdth,wght.ttf",
      weight: "100 900", // full weight range
      style: "normal",
    },
  ],
  variable: "--font-ibm-font",
  display: "swap",
});
const playFair2 = localFont({
  src: [
    {
      path: "./fonts/PlayfairDisplay-VariableFont_wght.ttf",
      weight: "100 900", // full weight range
      style: "normal",
    },
  ],
  variable: "--font-play-fair2",
  display: "swap",
});
const freightDisplayLight2 = localFont({
  src: [
    {
      path: "./fonts/FreightDispProLight-Regular.ttf",
      weight: "100 900", // full weight range
      style: "normal",
    },
  ],
  variable: "--font-freight-display2",
  display: "swap",
});

export const metadata = {
  title: "Serena Blake",
  description: "Therapist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  ${geistMono.variable} ${freightDisplayLight.variable}  ${playFairDisplay.variable} ${ibmFont.variable} ${playFair2.variable}  ${freightDisplayLight2.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
