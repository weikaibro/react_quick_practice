/**
 * Root Layout Component
 * This is the main layout wrapper for all pages in the application
 * It sets up the HTML structure, metadata, and global styling
 */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/**
 * Geist Sans Font Configuration
 * Loads the Geist font family from Google Fonts with Latin subsets
 * Used as the primary sans-serif font throughout the application
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/**
 * Geist Mono Font Configuration
 * Loads the Geist Mono font family from Google Fonts with Latin subsets
 * Used for monospace text (code blocks, pre-formatted text, etc.)
 */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Metadata Configuration
 * Sets the global page title and description used by search engines and social media
 */
export const metadata: Metadata = {
  title: "React Quick Practice",
  description: "A Next.js application for practicing React concepts",
};

/**
 * RootLayout Component
 * The root layout component that wraps all pages in the application
 * Configures the HTML document structure and applies global fonts and styles
 * 
 * @component
 * @function RootLayout
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components/pages to render within the layout
 * @returns {JSX.Element} The HTML document structure with all child pages rendered inside
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // Apply font variables and antialiased rendering for smooth text
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Render child pages/components */}
        {children}
      </body>
    </html>
  );
}
