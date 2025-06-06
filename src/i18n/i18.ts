import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translateEn from "../locale/en";
import translateRu from "../locale/ru";

i18n
    .use(initReactI18next)
    .init({
        lng: "ru",
        fallbackLng: "ru",
        resources: {
            en: { translation: translateEn },
            ru: { translation: translateRu },
        }
    });
