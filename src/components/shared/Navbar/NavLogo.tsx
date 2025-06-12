import logo from '@/assets/icons/Logo Macaron.svg'

type Props ={
  cn: string
}

export default function NavLogo({cn}:Props) {
  return (
    <div className={cn}>
      <img src={logo} alt="Logo" className='object-contain w-full h-full'/>
    </div>
  );
}

