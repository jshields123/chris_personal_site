import "./globals.css";
import { Bebas_Neue } from "next/font/google";
import styles from "./page.module.css";

export const metadata = {
  title: "Chris Van Dijk",
  description: "Personal website of Chris Van Dijk",
};

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html className={styles.html} lang="en">
      <body className={bebasNeue.className}>{children}</body>
    </html>
  );
}
