import logo from '@/assets/icons/Logo Macaron.svg'
export default function NavLogo() {
  return (
    <div className="bg-[#B3D9F3] rounded-full p-2 inline-block">
      <img src={logo} alt="Logo" className="w-12 h-12" />
    </div>
  );
}

