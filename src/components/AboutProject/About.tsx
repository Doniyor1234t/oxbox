import { ClassSharp } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import aboutImg from "assets/Imgs/About.png";
import cls from "./style.module.scss";
import { Thunder } from "assets/Icons/Thunder";
import { Arrowrightup } from "assets/Icons/AngleArrow";

const About = () => {
  return (
    <section id="opportunities" className={cls.opportunities}>
      <Container>
        <Box className={cls.body}>
          <Box className={cls.boxImg}>
            <img src={aboutImg} alt="" />
          </Box>
          <Box sx={{backgroundColor:'background.paper2'}} className={cls.content}>
            <Box sx={{backgroundColor:'background.paper'}} className={cls.topContent}>
              
              <Typography variant="h2">О проекте</Typography>
              <Typography sx={{margin:'16px 0 20px 0'}} variant="text" color={'text.main'}>
                {/* SpeakOut - это онлайн-платформа для заработка на своем мнении. 
                Мы предлагаем пользователям зарабатывать на своих отзывах о товарах и услугах. */}
                SpeakOut предлагает вам уникальную возможность превратить ваше мнение в реальные деньги. Проходите опросы, делитесь своими мыслями и получайте вознаграждение за каждый ответ. 
              </Typography>
              <Button variant="xl" color="primary" endIcon={<Arrowrightup/>}>Начать</Button>
            </Box>
            <Box className={cls.bottomContent}>
              <Box className={cls.bottBox}>
                <Thunder />
                <div className={cls.textBox}>
                  <Typography variant="h6">Цели проекта:</Typography>
                  <Typography variant="text" color={'text.main'}>Вклад в развитие продуктов и услуг с помощью мнений пользователей.</Typography>
                </div>
              </Box>
              <Box className={cls.bottBox}>
                <Thunder />
                <div className={cls.textBox}>
                  <Typography variant="h6">Наша миссия:</Typography>
                  <Typography variant="text" color={'text.main'}>Обеспечить каждому возможность заработку</Typography>
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