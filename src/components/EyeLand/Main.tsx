import { Box, Button, Container, Typography } from "@mui/material"
import cls from './style.module.scss';
import { Arrowrightup } from "src/assets/Icons/AngleArrow";
import Img from "src/assets/Imgs/Download.png";
import DoubleApp1 from "src/assets/Imgs/iPhone-1.png";
import DoubleApp from "src/assets/Imgs/iPhone.png";
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const MainLand = () => {
  
  const imgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    console.log(imgRef.current);
    gsap.to(imgRef.current, {
      x: -400,
      y: 1000,
      rotation: 360,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 10px",
        end: "500px 10px",
        scrub: true,
        // pin: true,
        markers: true,
        id: "scrub"
      }
    });

  }, [])
  
    return (
      <section className={cls.main}>
        <Container sx={{position:'relative',display:'flex', justifyContent:'space-between',}} className={cls.body}>
          <Box sx={{
            display:'flex',
            flexDirection:'column',
            gap:'36px',
            alignItems:"flex-start",
            padding:'40px',
            marginTop:"160px",
            maxWidth:'650px',
            position:'relative',
            zIndex:'-1'
          }}>
          <Box sx={{display:'flex',flexDirection:'column', gap:'24px'}}>
            <Typography variant="h1" component="h1">Ваше мнение - ваш заработок с нами!</Typography>
            <Typography variant="text">Присоединяйтесь к нашему онлайн-сообществу и начните зарабатывать уже сегодня!</Typography>
          </Box>
          <Button  color="primary" endIcon={<Arrowrightup />}>Начать</Button>
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
        <div ref={imgRef} className={cls.moveImg}>
          <img src={DoubleApp1} alt="" />
        </div>
      </section>
    )
}
export default MainLand