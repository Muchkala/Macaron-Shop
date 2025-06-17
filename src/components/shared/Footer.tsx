import img1 from "@/assets/icons/FooterLeft_1.svg";
import img2 from "@/assets/icons/FooterLeft_2.svg";
import img3 from "@/assets/icons/FooterLeft_3.svg";

import imgSocial1 from "@/assets/icons/FooterSocial1.svg";
import imgSocial2 from "@/assets/icons/FooterSocial2.svg";
import imgSocial3 from "@/assets/icons/FooterSocial3.svg";
import { styles } from "@/styles/styles";


export default function Footer() {
  return (
    <footer className="bg-[#EBEDEE] py-[58px]">
      <div className={`${styles.container}`}>
        <div className="grid grid-cols-12 xl:gap-6 lg:gap-20 md:gap-x-[13%]">
            <div className="col-span-12 md:col-span-4 flex flex-col gap-[30px]">
                <div className="flex flex-col sm:flex-row justify-evenly gap-[15px] lg:gap-[25px] mb-[20px]">
                    <div className="flex md:flex-col justify-start md:justify-start max-w-[300px] items-center gap-[10px] md:gap-[16px] text-center">
                        <img src={img1} alt="" className="w-[50px] h-[37px] object-contain"/>
                        <p className={`leading-[115%] font-normal text-black !text-[12px] max-w-[200px] text-start md:text-center md:max-w-[140px]`}>
                            Готовим вручную и с любовью</p>
                    </div>
                    <div className="flex md:flex-col justify-start md:justify-start max-w-[300px] items-center gap-[10px] md:gap-[16px] text-center">
                        <img src={img2} alt="" className="w-[50px] h-[37px] object-contain"/>
                        <p className={`leading-[115%] font-normal text-black !text-[12px] max-w-[200px] text-start md:text-center md:max-w-[140px]`}>
                            Доставим в день заказа</p>
                    </div>
                    <div className="flex md:flex-col justify-start md:justify-start max-w-[300px] items-center gap-[10px] md:gap-[16px] text-center">
                        <img src={img3} alt="" className="w-[50px] h-[37px] object-contain"/>
                        <p className={`leading-[115%] font-normal text-black !text-[12px] max-w-[200px] text-start md:text-center md:max-w-[120px]`}>100% <br /> миндальная мука и натуральные ингредиенты</p>
                    </div>
                </div>

                <div>
                    <p className={`leading-[115%] hidden sm:block md:text-start text-center mb-[20px] font-normal text-[#292929]/70 text-[12px]`}>© 2021 Макароншоп <br /> ООО "Квантум", Санкт-Петербург,  улица Маршала Тухачевского, дом 22</p>
                </div>
            </div>

            <div className="flex gap-4 col-span-12 sm:hidden">
                <p className={`w-[50%] leading-[115%] block font-normal text-[#292929]/70 text-[10px] md:text-[12px]`}>© 2021 Макароншоп <br /> ООО "Квантум", Санкт-Петербург,  улица Маршала Тухачевского, дом 22</p>
                <div className="flex flex-col w-[50%]">
                    <h5 className="w-full text-[12px] sm:text-[16px] uppercase font-semibold text-[#292929] mb-[5px] leading-[100%]">+7 (812) 309 82 88</h5>
                    <p className=" w-full text-start flex-col text-[10px] sm:text-[14px] font-normal text-[#292929]">с 9:00 до 21:00</p>
                </div>
            </div>

            <div className="col-span-6 w-[160px] hidden md:col-span-2 text-start lg:flex flex-col gap-[20px]">
                <h5 className="text-[16px] uppercase font-semibold text-[#292929] mb-[5px] leading-[100%]">Информация</h5>
                <ul className="flex text-start flex-col gap-[18px] text-[14px] font-normal text-[#292929] ">
                    <li>О компании</li>
                    <li>Гарантии вкуса и свежести</li>
                    <li>Доставка и оплата</li>
                    <li>Контакты</li>
                </ul>
            </div>
            <div className="hidden col-span-6 w-[160px] lg:col-span-2 text-start xl:flex flex-col gap-[20px]">
                <h5 className="text-[16px] uppercase font-semibold text-[#292929] mb-[5px] leading-[100%]">Каталог</h5>
                <ul className="flex text-start flex-col gap-[18px] text-[14px] font-normal text-[#292929] ">
                    <li>Каталог десертов</li>
                    <li>Готовые наборы</li>
                    <li>Собрать свой набор</li>
                    <li>Акции</li>
                </ul>
            </div>
            <div className="col-span-6 w-[160px] md:col-span-2 text-start hidden md:flex flex-col gap-[20px]">
                <h5 className="text-[16px] uppercase font-semibold text-[#292929] mb-[5px] leading-[100%]">ДЛЯ БИЗНЕСА</h5>
                <ul className="flex text-start flex-col gap-[18px] text-[14px] font-normal text-[#292929] ">
                    <li>Корпоративные подарки</li>
                    <li>Для юридических лиц</li>
                    <li>Оповикам</li>
                </ul>
            </div>
            <div className="col-span-12 md:w-[170px] w-full flex flex-row lg:gap-[20px] md:gap-[35px] md:flex-col md:col-span-2">
                <div className="hidden sm:flex flex-col place-content-center !w-full">
                    <h5 className="text-[12px] sm:text-[16px] uppercase font-semibold text-[#292929] mb-[5px] leading-[100%]">+7 (812) 309 82 88</h5>
                    <p className="text-start flex-col text-[10px] sm:text-[14px] font-normal text-[#292929]">с 9:00 до 21:00</p>
                </div>
                <br /><br /><br />
                <div className="sm:flex hidden w-full justify-end md:justify-start gap-[18px] items-center">
                    <img src={imgSocial1} alt="" />
                    <img src={imgSocial2} alt="" />
                    <img src={imgSocial3} alt="" />
                </div>
            </div> 
        </div>
            <div className="flex sm:hidden justify-center mt-[-30px] w-full gap-[18px] items-center">
                    <img src={imgSocial1} alt="" />
                    <img src={imgSocial2} alt="" />
                    <img src={imgSocial3} alt="" />
            </div>
      </div>
    </footer>
  );
}

