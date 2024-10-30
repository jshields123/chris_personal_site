import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Chris Van Dijk",
  description: "Personal website for Chris Van Dijk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>{children}</body>
    </html>
  );
}
