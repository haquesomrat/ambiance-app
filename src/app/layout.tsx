import "@/app/globals.css";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "react-quill/dist/quill.snow.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export default function BackendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
