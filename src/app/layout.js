import "./globals.css";
import CTA from "./Layout/CTA";
import Footer from "./Layout/Footer";
import { Toaster } from "react-hot-toast";

// ✅ Basic metadata
export const metadata = {
  title: "Vordx Technologies",
  description: "Vordx",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#14171C] text-white">
        {children}
        <Toaster position="top-right" reverseOrder={false} />
        <CTA />
        <Footer />
      </body>
    </html>
  );
}
