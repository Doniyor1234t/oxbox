import { Box, Button, Container, Typography } from "@mui/material"
import cls from './style.module.scss';
import { Arrowrightup } from "src/assets/Icons/AngleArrow";
import Img from "src/assets/Imgs/Download.png";
import DoubleApp1 from "src/assets/Imgs/iPhone-1.png";
import DoubleApp from "src/assets/Imgs/iPhone.png";
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from "react-i18next";

const MainLand = () => {
  
  const { t } = useTranslation("translation");


  const imgRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (imgRef.current) {
      gsap.registerPlugin(ScrollTrigger);
        gsap.from(imgRef.current, {
          x: 0,
          rotate: 10,
          scale: 1,
        })
        gsap.to(imgRef.current, {
          x: -794,
          rotate: 0,
          scale: 1.1,
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top-=135 10px",
            end: "721px 10px",
            scrub: true,
            pin: true,
            // markers: true,
            id: "scrub",
          }
        });
      }
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    
  }, [])
  
    return (
      <section className={cls.main}>.
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
            zIndex:'-1',
            '@media (max-width: 768px)': {
              gap:'20px',
              padding:'20px 0px ',
              marginTop:"100px",
            }
          }} >
          <Box sx={{
            display:'flex',
            flexDirection:'column',
            gap:'24px',
            '@media (max-width: 768px)': {
              gap:'12px'
            }
          }}>
            <Typography variant="h1" component="h1">{t('Main.title')}</Typography>
            <Typography variant="p">{t('Main.subtitle')}</Typography>
          </Box>
          <Button href="https://oxbox-respondent.udevs.io/home" color="primary" endIcon={<Arrowrightup />}>{t('Main.button')}</Button>
          <Button onClick={()=> window.location.href = ('https://onelink.to/ywrr87')} sx={{ 
            backgroundColor:'background.paper', 
            width:'300px', 
            padding:'12px', 
            borderRadius:'20px',
            marginTop:'116px',
            '@media (max-width: 768px)': {
              width:'100%',
              display:'flex',
              justifyContent:'space-between',
              marginTop:'434px',
            }, 
            '&:hover':{backgroundColor:'background.paper', outline:'none'},
            '&.MuiButton-root': { color: 'inherit', boxShadow: 'none' } }}
          >
            <Typography sx={{
              fontSize:22,
              fontWeight:600,
              lineHeight:"125%",
              '@media (max-width: 768px)': {
                margin:'0 auto',
                textAlign:'center',
                // flex:'1 0 auto',
                width:'100px',
                fontSize:22,
              }
            }}>{t('Main.download')}</Typography>
            <img src={Img} alt="" />
          </Button>
          </Box>
          <Box className={cls.img}>
            <img src={DoubleApp1} alt="" />
            <img src={DoubleApp} alt="" />
          </Box>
          <div ref={imgRef} className={cls.moveImg}>
            <img src={DoubleApp1} alt="" />
          </div>
        </Container>
      </section>
    )
}
export default MainLand