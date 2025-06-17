import type { UniButtonType } from "@/types";

export default function UniButton({ children, onClik, type, className }: UniButtonType) {
      return (
            <button
                  className={`py-4.5 px-12 rounded-sm border border-[#4E9DD3] bg-transparent text-sm text-semibold text-black block m-auto ${className} mt-9`}
                  onClick={onClik}
                  type={type}>
                  {children}
            </button>
      )
}
