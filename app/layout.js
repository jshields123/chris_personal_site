import "./globals.css";
import { Roboto } from "next/font/google";
import { ScreenSizeProvider } from "./providers/ScreenSizeProvider";

import styles from "./page.module.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Chris Van Dijk",
  description: "Personal website of Chris Van Dijk",
};

export default function RootLayout({ children }) {
  return (
    <html className={styles.html} lang="en">
      <body className={`${roboto.variable}`}>
        <ScreenSizeProvider>{children}</ScreenSizeProvider>
      </body>
    </html>
  );
}
