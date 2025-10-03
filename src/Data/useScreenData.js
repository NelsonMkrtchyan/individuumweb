// screenData

import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export const useScreens = () => {
    const { t } = useTranslation(["navbar"]);

    const screens = useMemo(() =>
      [
          { name: t("navbar:aboutUs"), to: "aboutUs" },
          { name: t("navbar:dentists"), to: "dentists" },
          // { name: t("navbar:priceList"), to: "priceList" },
          // { name: t("navbar:gallery"), to: "gallery" },
          { name: t("navbar:services"), to: "services" },
          { name: t("navbar:contacts"), to: "contacts" }
      ], [t]);

    return screens;

};
