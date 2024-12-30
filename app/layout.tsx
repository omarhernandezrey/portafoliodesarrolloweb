import "./globals.css";
import NavbarLogic from "../components/ui/NavbarLogic";

export const metadata = {
  title: "Portafolio Desarrollador Web",
  description: "Mi portafolio profesional como desarrollador web.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <NavbarLogic />
        {children}
      </body>
    </html>
  );
}
