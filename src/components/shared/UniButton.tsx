
interface UniButtonType {
  children: React.ReactNode;
  onClik?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function UniButton({ children, onClik, type, className }: UniButtonType) {
      return (
            <button
                  className={`md:py-4.5 text-[12px] sm:text-[14px] md:text-[14px] py-[12px] px-[25px] sm:px-12 font-semibold rounded-sm border border-[#4E9DD3] bg-transparent text-sm text-semibold text-black block m-auto ${className} mt-[35px] mb-[65px]`}
                  onClick={onClik}
                  type={type}>
                  {children}
            </button>
      )
}
