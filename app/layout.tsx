import "./globals.css";
import Navbar from "../components/ui/Navbar";

export const metadata = {
  title: "Portafolio Desarrollador Web",
  description: "Mi portafolio profesional como desarrollador web.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
