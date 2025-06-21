import React, { useEffect, useRef, useState } from "react"

type Props = {
    alt: string;
    srcset: {
        xl: string;
        md: string;
        sm: string;
    };
    className?: string;
}


const LazyImage: React.FC<Props> = ({ alt, srcset, className }) => {
    const [isLoader, setIsLoader] = useState(false)
    const elementRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        const isContent = new IntersectionObserver(([elem]) => {
            // console.log(elem)
            if (elem.isIntersecting) {
                setIsLoader(true)
                isContent.disconnect()
            }
        }, { threshold: 0.1 })

        if (elementRef.current) {
            isContent.observe(elementRef.current)
        }

        return () => isContent.disconnect()

    }, [])

    return (
        <div ref={elementRef} className={className}>
            {
                isLoader ? <picture>
                    <source media="(min-width:1200px )" srcSet={srcset.xl} />
                    <source media="(min-width:768px )" srcSet={srcset.md} />
                    <source media="(min-width:320px )" srcSet={srcset.sm} />
                    <img src={srcset.sm} alt={alt} loading="lazy" />
                </picture> : <div className="w-full h-full flex items-center justify-center">
                    <div className="animate-spin bg-[#F7EBE5] w-[100px] h-[100px] md:h-[340px] lg:h-[400px]"></div>
                </div>
            }
        </div>
    )

}

export default LazyImage
