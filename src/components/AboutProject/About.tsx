import { Box, Button, Container, Typography } from "@mui/material";
import aboutImg from "assets/Imgs/About.png";
import bgPhone from "assets/Imgs/bgPhone.png";
import cls from "./style.module.scss";
import { Thunder } from "assets/Icons/Thunder";
import { Arrowrightup } from "assets/Icons/AngleArrow";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("translation");

  return (
    <section id="opportunities" className={cls.opportunities}>
      <Container>
        <Box className={cls.body}>
          <Box className={cls.boxImg}>
            <img src={aboutImg} alt="" />
            <img src={bgPhone} alt="" />
          </Box>
          <Box sx={{backgroundColor:'background.paper2'}} className={cls.content}>
            <Box sx={{backgroundColor:'background.paper'}} className={cls.topContent}>
              
              <Typography variant="h2">{t('About.title')}</Typography>
              <Typography sx={{margin:'16px 0 20px 0'}} variant="p" color={'text.main'}>
                {/* SpeakOut - это онлайн-платформа для заработка на своем мнении. 
                Мы предлагаем пользователям зарабатывать на своих отзывах о товарах и услугах. */}
                {t('About.subtitle')}
              </Typography>
              <Button color="primary" endIcon={<Arrowrightup/>}>{t('Main.button')}</Button>
            </Box>
            <Box className={cls.bottomContent}>
              {/* <Box className={cls.bottBox}>
                <Thunder />
                <div className={cls.textBox}>
                  <Typography variant="h6">{t('About.opportunities.1.title')}</Typography>
                  <Typography sx={{
                    '@media (max-width: 768px)': {
                      fontSize:18,
                      lineHeight: "145%",
                    },
                  }} variant="p" color={'text.main'}>{t('About.opportunities.1.subtitle')}</Typography>
                </div>
              </Box> */}
              <Box className={cls.bottBox}>
                <Thunder />
                <div className={cls.textBox}>
                  <Typography variant="h6">{t('About.opportunities.2.title')}</Typography>
                  <Typography sx={{
                    '@media (max-width: 768px)': {
                      fontSize:18,
                      lineHeight: "145%",
                    },
                  }} variant="p" color={'text.main'}>{t('About.opportunities.2.subtitle')}</Typography>
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box></Box>
      </Container>
    </section>
  );
};
export default About;