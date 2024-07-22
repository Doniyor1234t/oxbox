import { Box, Button, Container, Skeleton, Typography } from "@mui/material"
import cls from './style.module.scss';
import { Arrowrightup } from "src/assets/Icons/AngleArrow";
import Img from "src/assets/Imgs/Download.png";
import DoubleApp1 from "src/assets/Imgs/iPhone-1.png";
import DoubleApp from "src/assets/Imgs/iPhone.png";
import { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from "react-i18next";

const MainLand = () => {

  const [isLoadedImg1, setIsLoadedImg1] = useState(false);
  const [isLoadedImg2, setIsLoadedImg2] = useState(false);
  const [isLoadedImg3, setIsLoadedImg3] = useState(false);
  console.log(isLoadedImg1, isLoadedImg2, isLoadedImg3);
  console.log(!isLoadedImg3 || !isLoadedImg2 || !isLoadedImg1);
  
  
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
          <Box sx={{display:'flex', gap:'24px'}}>
            <Button href="https://oxbox-respondent.udevs.io/home" color="primary" endIcon={<Arrowrightup />}>{t('Main.button')}</Button>
            {/* <Button variant="secondary" href="https://oxbox-respondent.udevs.io/home" color="primary">{t('Main.surveys')}</Button>
            <Button variant="secondary" href="https://oxbox-respondent.udevs.io/home" color="primary">{t('Main.blits')}</Button> */}
          </Box>
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
          <Box className={`${cls.img} ${ isLoadedImg1 && isLoadedImg2 && isLoadedImg3 ? cls.loaded : null }`}>
            <img src={DoubleApp1} alt="App image" onLoad={() => setIsLoadedImg1(true)}/>
            <img src={DoubleApp} alt="App image" onLoad={() => setIsLoadedImg2(true)}/>
            {
              (!isLoadedImg1 || !isLoadedImg2 || !isLoadedImg3) && <Skeleton animation="wave" sx={{width:"100%",height:'110%'}} variant="rectangular"/>
            }
          </Box>
          <div ref={imgRef} className={cls.moveImg}>
            <img src={DoubleApp1} alt="App image" style={{display:`${isLoadedImg3?"block":"none"}`}} onLoad={() => {setIsLoadedImg3(true)}}/>
          </div>
        </Container>
      </section>
    )
}
export default MainLand