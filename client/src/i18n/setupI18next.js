import i18n from "i18next"
import { initReactI18next } from "react-i18next"

export default () => {
  i18n.use(initReactI18next).init({
    debug: process.env.NODE_ENV === "development",
    fallbackLng: "pl",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: { useSuspense: false },
  })

  return i18n
}
