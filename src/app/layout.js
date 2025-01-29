import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const poppins = Poppins({
  weight:["400","600","700"],
  subsets: ['latin'],
})

export const metadata = {
  title: "next-js",
  description: "Trying to learn NextJS as best as we can",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.className} antialiased`}
      >
        <NavBar/>
        <main>
        {children}

        </main>
      </body>
    </html>
  );
}
