import img1 from "@/assets/icons/FooterLeft_1.svg";
import img2 from "@/assets/icons/FooterLeft_2.svg";
import img3 from "@/assets/icons/FooterLeft_3.svg";

import imgSocial1 from "@/assets/icons/FooterSocial1.svg";
import imgSocial2 from "@/assets/icons/FooterSocial2.svg";
import imgSocial3 from "@/assets/icons/FooterSocial3.svg";
import type { Feature, LinkSection, SocialLink } from "@/types";

export const features: Feature[] = [
  {
    icon: img1,
    text: "Готовим вручную и с любовью",
  },
  {
    icon: img2,
    text: "Доставим в день заказа",
  },
  {
    icon: img3,
    text: "100% <br /> миндальная мука и натуральные ингредиенты",
  },
];

export const copyrightText = "© 2021 Макароншоп <br /> ООО \"Квантум\", Санкт-Петербург,  улица Маршала Тухачевского, дом 22";

export const contactInfo = {
  phone: "+7 (812) 309 82 88",
  hours: "с 9:00 до 21:00",
};

export const linkSections: LinkSection[] = [
  {
    title: "Информация",
    links: ["О компании", "Гарантии вкуса и свежести", "Доставка и оплата", "Контакты"],
    className: 'hidden md:col-span-2 text-start lg:flex flex-col gap-[20px]'
  },
  {
    title: "Каталог",
    links: ["Каталог десертов", "Готовые наборы", "Собрать свой набор", "Акции"],
    className: 'hidden col-span-6 w-[160px] lg:col-span-2 text-start xl:flex flex-col gap-[20px]'
  },
  {
    title: "ДЛЯ БИЗНЕСА",
    links: ["Корпоративные подарки", "Для юридических лиц", "Оповикам"],
    className: 'col-span-6 w-[160px] md:col-span-2 text-start hidden md:flex flex-col gap-[20px]'
  },
];

export const socialLinks: SocialLink[] = [
  {
    icon: imgSocial1,
    alt: "social-icon-1",
    url: "#",
  },
  {
    icon: imgSocial2,
    alt: "social-icon-2",
    url: "#",
  },
  {
    icon: imgSocial3,
    alt: "social-icon-3",
    url: "#",
  },
];
