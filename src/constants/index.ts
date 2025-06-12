import navtop1 from '@/assets/icons/Navtoplogo1.svg'
import navtop2 from '@/assets/icons/Navtoplogo2.svg'
import navtop3 from '@/assets/icons/Navtoplogo3.svg'
import navtop4 from '@/assets/icons/Navtoplogo4.svg'

import social1 from '@/assets/icons/UniTelegram.svg'
import social2 from '@/assets/icons/UniOK.svg'
import social3 from '@/assets/icons/UniWK.svg'

import phoneIcon from '@/assets/icons/NavPhone.svg'
import cartIcon from '@/assets/icons/UniCart.svg'

import saleProduct1 from '@/assets/images/Sale Product (1).png'
import saleProduct2 from '@/assets/images/Sale Product (2).png'
import saleProduct3 from '@/assets/images/Sale Product (3).png'
import saleProduct4 from '@/assets/images/Sale Product (4).png'

import BisquiteYellow from "@/assets/images/Bisquite yellow.png"
import BisquiteBlue from "@/assets/images/Bisquite blue.png"
import BisquitePink from "@/assets/images/Bisquite pink.png"

import type { HolidaysType, ISaleProducts, NavbarCenterData, NavbarTop, } from '@/types'


export const navbarCenterData: NavbarCenterData = {
  leftData: [
    { id: 0, title: 'Гарантия свежести', path: '/' },
    { id: 1, title: 'Доставка и оплата', path: '/' },
    { id: 2, title: 'Оптовые поставки', path: '/' },
    { id: 3, title: 'Контакты', path: '/' },
  ],
  rightData: {
    selectLang: [
      { id: 0, title: 'Санкт-Петербург RU' },
      { id: 1, title: 'Санкт-Петербург EN' },
      { id: 2, title: 'Москва RU' },
      { id: 3, title: 'Москва EN' },
    ],
    contacts: [
      {
        id: 1,
        img: phoneIcon,
        title: '8 812 309-82-88',
      },
      {
        id: 2,
        img: cartIcon,
        title: 'В корзине',
      },
    ],
    social: [
      { id: 0, img: social1, alt: 'Telegram' },
      { id: 1, img: social2, alt: 'OK' },
      { id: 2, img: social3, alt: 'WK' },
    ],
  },
};



export const NavbarTopList: NavbarTop[] = [
  {
    id: 0,
    img: navtop1,
    title: 'ДОСТАВКА B ДЕНЬ 3AKA3A',
  },
  {
    id: 1,
    img: navtop2,
    title: 'ОПТОВЫЕ ПОСТАВКИ OT ПРОИЗВОДИТЕЛЯ',
  },
  {
    id: 2,
    img: navtop3,
    title: 'ВСЕГДА СВЕЖЕЕ',
  },
  {
    id: 3,
    img: navtop4,
    title: 'МИНДАЛЬНАЯ MУKA И НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ',
  },
]

export const SaleProducts: ISaleProducts[] = [
  {
    id: 0,
    img: saleProduct1,
    title: "По СПб в районе КАД - от 3000₽ По МСК - от 5000₽",
    onSale: ' БЕСПЛАТНАЯ ДОСТАВКА',
  },
  {
    id: 1,
    img: saleProduct2,
    title: "Шоколадное пирожное картошка на основе бисквита!",
    onSale: 'НОВИНКА',
  },
  {
    id: 2,
    img: saleProduct3,
    title: "Аппетитные конфеты на основе миндального печенья и крема",
    onSale: 'НОВИНКА',
  },
  {
    id: 3,
    img: saleProduct4,
    title: "Карамель на палочке из натуральных ингредиентов",
    onSale: 'СЛАДКАЯ НОВИНКА',
  },
  {
    id: 0,
    img: saleProduct1,
    title: "По СПб в районе КАД - от 3000₽ По МСК - от 5000₽",
    onSale: ' БЕСПЛАТНАЯ ДОСТАВКА',
  },
  {
    id: 1,
    img: saleProduct2,
    title: "Шоколадное пирожное картошка на основе бисквита!",
    onSale: 'НОВИНКА',
  },
  {
    id: 2,
    img: saleProduct3,
    title: "Аппетитные конфеты на основе миндального печенья и крема",
    onSale: 'НОВИНКА',
  },
  {
    id: 3,
    img: saleProduct4,
    title: "Карамель на палочке из натуральных ингредиентов",
    onSale: 'СЛАДКАЯ НОВИНКА',
  },
]

export const HolidaysData: HolidaysType[] = [
  { id: 0, title: "Скоро День рождения близкого человека", img: BisquiteYellow, rotate: -18 },
  { id: 1, title: "1 января - Новый Год 2021", img: BisquiteBlue, rotate: 24 },
  { id: 2, title: "14 февраля - День Святого Валентина", img: BisquitePink, rotate: -16 },
  { id: 3, title: "23 февраля - День Защитника Отечества", img: BisquiteYellow, rotate: 23 },
  { id: 4, title: "8 марта - Международный Женский День", img: BisquiteBlue, rotate: -6 },
  {
    id: 5, title: "9 марта - День Сурка", img: BisquitePink, rotate: 17
  }
]; 