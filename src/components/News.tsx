import UniHeader from "./shared/UniHeader";
import { styles } from "@/styles/styles";
import { newsData } from "@/constants";
import UniButton from "./shared/UniButton";
import Slider from "react-slick";
import { cn } from "@/lib/utils";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function News() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, 
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, 
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="pb-[20px]">
      <UniHeader text="Новости" />
      <div className={styles.container}>
        <Slider {...settings} className="newsSlider mb-[50px] pb-[20px]">
          {newsData.map((news) => (
            <div
              key={news.id}
              className={cn(
                "px-[4px] sm:px-2 md:px-4 max-h-[420px] flex flex-col items-center"
              )}>
              <img
                src={news.image}
                alt={news.title}
                className="w-full max-w-[370px] h-[100px] sm:min-h-[180px] md:h-[210px] sm:object-contain object-fill"
              />
              <div className="flex flex-col gap-[10px] rounded-bl-[5px] hover:shadow-xl transition-all duration-400 rounded-br-[5px] p-[20px] max-w-[370px] h-[210px] bg-white border border-t-0 border-[#EDEDF0]">
                <h3 className={`${styles.uniGrayTxt}  text-[#969696]`}>
                  {news.date}
                </h3>
                <h2 className="md:text-[18px] text-[12px] sm:text-[14px] font-semibold text-[#292929] leading-[100%]">
                  {news.title}
                </h2>
                <p className={`${styles.uniGrayTxt} text-[#292929]`}>
                  {news.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <UniButton>Все новости</UniButton>
    </div>
  );
}
