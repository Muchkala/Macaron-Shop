interface UniHeaderProps {
    text:string
}

export default function UniHeader({ text }: UniHeaderProps) {
  return (
    <h1 className="dark:text-white text-[#292929] text-[30px] font-semibold
     leading-[100%] text-center py-[40px]">{text}</h1>
  );
}
