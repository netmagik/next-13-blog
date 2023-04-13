import "./globals.css";
import { Poppins } from "next/font/google";
import Header from '../app/components/Header'

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "My Blog",
  description: "Blog in NextJS 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
