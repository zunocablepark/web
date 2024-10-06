import { Nunito_Sans as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  variable: "--font-sans",
});
