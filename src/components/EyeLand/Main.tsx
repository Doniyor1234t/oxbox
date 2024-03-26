import { Box, Button, Container, Typography } from "@mui/material"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import cls from './style.module.scss';
import { Arrowrightup } from "src/assets/Icons/AngleArrow";
import Img from "src/assets/Imgs/Download.png";
import DoubleApp from "src/assets/Imgs/DoubeApp.png";

const MainLand = () => {
    return (
      <section className={cls.main}>
      <Container sx={{display:'flex', justifyContent:'space-between',}} className={cls.body}>
        <Box sx={{display:'flex',flexDirection:'column',gap:'36px',alignItems:"flex-start",padding:'40px', marginTop:"160px", maxWidth:'650px'}}>
        <Box sx={{display:'flex',flexDirection:'column', gap:'24px'}}>
          <Typography variant="h1" component="h1">Ваше мнение - ваш заработок с нами!</Typography>
          <Typography variant="text">Присоединяйтесь к нашему онлайн-сообществу и начните зарабатывать уже сегодня!</Typography>
        </Box>
        <Button  variant="xl" color="primary" endIcon={<Arrowrightup />}>Начать</Button>
        <Button  sx={{ 
          backgroundColor:'background.paper', 
          width:'300px', 
          padding:'12px', 
          borderRadius:'20px',
          marginTop:'116px',
          '&:hover':{backgroundColor:'background.paper', outline:'none'},
          '&.MuiButton-root': { color: 'inherit', boxShadow: 'none' } }} 
        >
          <Typography sx={{fontSize:22,fontWeight:600,lineHeight:"125%"}}>Скачать SpeakOut</Typography>
          <img src={Img} alt="" />
        </Button>
        </Box>
        <Box className={cls.img}>
          <img src={DoubleApp} alt="" />
        </Box>
      </Container>
      </section>
    )
}
export default MainLand