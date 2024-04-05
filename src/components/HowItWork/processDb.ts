import { useTranslation } from "react-i18next";
import image1 from "../../assets/Imgs/1.png";
import image2 from "../../assets/Imgs/2.png";
import image3 from "../../assets/Imgs/3.png";
import image4 from "../../assets/Imgs/4.png";

const processDb = () =>  {
  
  const { t } = useTranslation("translation");
  const db = [
    {
      title: t('process.list.1.title'),
      description: t('process.list.1.description'),
      img:image1
    },
    {
      title: t('process.list.2.title'),
      description: t('process.list.2.description'),
      img:image2
    },
    {
      title: t('process.list.3.title'),
      description: t('process.list.3.description'),
      img:image3
    },
    {
      title: t('process.list.4.title'),
      description: t('process.list.4.description'),
      img:image4
    },
]
  return db};
export default processDb;