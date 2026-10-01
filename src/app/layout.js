import "./globals.css";
import "@pub/fonts/stylesheet.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "All-Dis",
  description: "New And Like-New Designer Merchandise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!pr-0">
      <body className={`p-0 m-0 font-outfit font-light text-black text-base leading-[1.7]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
