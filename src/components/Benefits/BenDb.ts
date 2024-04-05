// import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6 } from "../../assets/icons/Benefits";
import {Icon1} from "assets/Icons/Benefits/1";
import {Icon2} from "assets/Icons/Benefits/2";
import {Icon3} from "assets/Icons/Benefits/3";
import {Icon4} from "assets/Icons/Benefits/4";
import {Icon5} from "assets/Icons/Benefits/5";
import {Icon6} from "assets/Icons/Benefits/6";
import { useTranslation } from "react-i18next";

const benDb = () => {
  const {t} = useTranslation("translation");
  const db =[
  {
    title: t("benefits.list.1.title"),
    description: t("benefits.list.1.description"),
    icon :Icon1
  },
  {
    title: t("benefits.list.2.title"),
    description: t("benefits.list.2.description"),
    icon :Icon2
  },
  {
    title: t("benefits.list.3.title"),
    description: t("benefits.list.3.description"),
    icon :Icon3
  },
  {
    title: t("benefits.list.4.title"),
    description: t("benefits.list.4.description"),
    icon :Icon4
  },
  {
    title: t("benefits.list.5.title"),
    description: t("benefits.list.5.description"),
    icon :Icon5
  },
  {
    title: t("benefits.list.6.title"),
    description: t("benefits.list.6.description"),
    icon :Icon6
  },
]
return db;
};
export default benDb;