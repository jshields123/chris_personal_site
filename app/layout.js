import "./globals.css";
import { Bebas_Neue, Roboto } from "next/font/google";
import styles from "./page.module.css";
import { Footer } from "./components/Footer";
import { FOOTER_CONTENT } from "./components/Footer/Footer.constants";

export const metadata = {
  title: "Chris Van Dijk",
  description: "Personal website of Chris Van Dijk",
};

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html className={styles.html} lang="en">
      <body className={bebasNeue.className}>
        {children}

        <Footer link={FOOTER_CONTENT.linkHref} text={FOOTER_CONTENT.text} />
      </body>
    </html>
  );
}
