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
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia();
  useEffect(() => {
    if (imgRef.current) {
      gsap.registerPlugin(ScrollTrigger);
      mm.add("(min-width: 768px)", () => {
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
            onEnter: () => {
              console.log('Entered');
              // Adjust style or class here if needed
            },
            onLeaveBack: () => {
              console.log('Left back');
              // Adjust style or class here if needed to ensure visibility
            },
          }
        });
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        };
      });
      // mm.add("(width < 768px)", () => {
      //   gsap.from(imgRef.current, {
      //     x: 0,
      //     rotate: 10,
      //     scale: 1,
      //   })
      //   gsap.to(imgRef.current, {
      //     x: '-70px',
      //     rotate: 0,
      //     scale: 1.5,
      //     scrollTrigger: {
      //       trigger: imgRef.current,
      //       start: "top+=100 center",
      //       end: "1021px center",
      //       scrub: true,
      //       pin: true,
      //       markers: true,
      //       id: "scrub"
      //     }
      //   });
      //   return () => {
      //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      //   };
        
      // },{
      //   exit:() => {
      //     console.log(ScrollTrigger);
          
      //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      //   }
      // });
      // console.log(ScrollTrigger.getAll());
      
        // mm.revert();
      }
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    
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
            <Typography variant="h1" component="h1">Ваше мнение - ваш заработок с нами!</Typography>
            <Typography variant="text">Присоединяйтесь к нашему онлайн-сообществу и начните зарабатывать уже сегодня!</Typography>
          </Box>
          <Button color="primary" endIcon={<Arrowrightup />}>Начать</Button>
          <Button  sx={{ 
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
                width:'100px'
              }
            }}>Скачать SpeakOut</Typography>
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