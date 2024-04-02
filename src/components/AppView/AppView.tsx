import { Box, Button, Container, Typography } from "@mui/material";
import cls from "./style.module.scss";
import Img from "src/assets/Imgs/Download.png";
import Phones from "assets/Imgs/Mockup.png";

const AppView = () => {
  return (
    <section className={cls.appView}>
      <Container>
        <Box className={cls.body}>
          <Box className={cls.box}>
            <Typography variant="h2" color={'#fff'}>Превратите свое свободное время в прибыль - начните зарабатывать уже сегодня!</Typography>
            <Typography variant="text" color={'#fff'}>
              {/* SpeakOut предлагает вам уникальную возможность превратить ваше мнение в реальные деньги. Проходите опросы, делитесь своими мыслями и получайте вознаграждение за каждый ответ. */}
              Присоединяйтесь к нашему онлайн-сообществу и начните зарабатывать уже сегодня! Наша платформа предлагает вам уникальную возможность превратить ваше мнение в реальные деньги
            </Typography>
          </Box>
          <Button  sx={{ 
            position:'relative',
            zIndex:100,
            backgroundColor:'rgba(255, 255, 255, 0.10)', 
            width:'300px', 
            padding:'12px', 
            borderRadius:'20px',
            marginTop:'96px',
            '@media (max-width: 768px)': {
              width:'100%',
            },
            '&:hover':{backgroundColor:'rgba(255, 255, 255, 0.10)', outline:'none'},
            '&.MuiButton-root': { color: 'inherit', boxShadow: 'none' } }} 
          >
            <Typography color={'#fff'} sx={{fontSize:22,fontWeight:600,lineHeight:"125%"}}>Скачать SpeakOut</Typography>
            <img src={Img} alt="" />
          </Button>
          <div className={cls.images}>
            <img src={Phones} alt="" />
          </div>
        </Box>
      </Container>
    </section>
  );
}
export default AppView;