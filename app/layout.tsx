import type { Metadata } from "next";
import { IBM_Plex_Serif, Mona_Sans } from "next/font/google";

import Navbar from "@/components/Navbar";
import "./globals.css";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  weight: ['400','500','600','700'], // Regular weight
  subsets: ["latin"], // Specify the subset you need
});

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  display: "swap",
  subsets: ["latin"], // Specify the subset you need
});

export const metadata: Metadata = {
  title: "Cognitia",
  description: "Transform your books into realistic AI conversations with Cognitia. Our cutting-edge AI technology allows you to engage in dynamic dialogues based on the content of your books. Whether you're a student, researcher, or book enthusiast, Cognitia brings your reading experience to life by enabling you to interact with your books in a whole new way. Dive into the world of AI-powered conversations and discover insights, summaries, and discussions that enhance your understanding of the material. With Cognitia, your books become more than just text – they become interactive companions for learning and exploration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSerif.variable} ${monaSans.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
