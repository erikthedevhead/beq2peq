import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oil and Gas Consulting",
  description: "Expert consulting services for the oil and gas industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header>
          {/* Wrapping the nav content in a max-width container */}
          <nav className="bg-[#dbe4e9]">
            <div className="container mx-auto max-w-screen-xl px-8 flex justify-between items-center">
              <div className="logo py-1.5">
                <Image
                  src="/beq2_logo.jpeg"
                  alt="Company Logo"
                  width={70}
                  height={70}
                />
              </div>
              <ul className="flex space-x-6">
                <li>
                  <Link
                    href="/"
                    className="text-white font-bold hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white font-bold hover:underline"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white font-bold hover:underline"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        {children}
        <footer className="text-center mt-8 p-4">
          <p>© 2024 Oil and Gas Consulting. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
