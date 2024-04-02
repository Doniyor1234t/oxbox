import { useTranslation } from "react-i18next";
import image1 from "../../assets/Imgs/1.png";
import image2 from "../../assets/Imgs/2.png";
import image3 from "../../assets/Imgs/3.png";
import image4 from "../../assets/Imgs/4.png";

const processDb = () =>  {
  
  const { t, i18n } = useTranslation("translation");
  const db = [
    {
      title: t('About.opportunities.1.title'),
      description: t('About.opportunities.1.description'),
      img:image1
    },
    {
      title: t('About.opportunities.2.title'),
      description: t('About.opportunities.2.description'),
      img:image2
    },
    {
      title: t('About.opportunities.3.title'),
      description: t('About.opportunities.3.description'),
      img:image3
    },
    {
      title: t('About.opportunities.4.title'),
      description: t('About.opportunities.4.description'),
      img:image4
    },
]
  return db};
export default processDb;