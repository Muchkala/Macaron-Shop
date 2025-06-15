import NavbarBottom from "@/components/shared/Navbar/NavbarBottom";
import NavbarCenter from "@/components/shared/Navbar/NavbarCenter";
import NavbarTop from "@/components/shared/Navbar/NavbarTop";
export default function Navbar() {
  return (
    <nav className="relative z-20">
        <NavbarTop />
        <NavbarCenter/>
        <NavbarBottom/>
    </nav>
  )
}
