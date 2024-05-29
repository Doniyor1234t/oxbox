import cls from "./style.module.scss"
import { Box, Button, Container, Link, Typography } from "@mui/material"
import Logo from "assets/Icons/Logo.tsx"
import { Googleplay } from "src/assets/Icons/GooglePlay";
import Img from "src/assets/Imgs/Download.png";
import AppleIcon from '@mui/icons-material/Apple';
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation('translation')
  return (
    <footer className={cls.footer}>
      <Container>
        <Box sx={{backgroundColor:'background.paper'}} className={cls.body}>
          <Box className={cls.box}>
            <Link sx={{p:'8.2px 5.263px 7.606px 4.094px'}} href='' className={cls.logo}>
              <Logo />
            </Link>
            <Box className={cls.infos}>
              <ul className={cls.menu}>
                <li className={cls.menuItem}><Link sx={{p:0}} href='#opportunities'>{t('header.navbar.opportunities')}</Link></li>
                <li className={cls.menuItem}><Link sx={{p:0}} href='#process'>{t('header.navbar.process')}</Link></li>
                <li className={cls.menuItem}><Link sx={{p:0}} href='#benefits'>{t('header.navbar.benefits')}</Link></li>
                <li className={cls.menuItem}><Link sx={{p:0}} href='#faqs'>{t('header.navbar.faqs')}</Link></li>
              </ul>
              <div className={cls.contacts}>
                <div className={cls.contact}>
                  <span>{t('footer.email')}</span>
                  <Link sx={{p:0}} href="mailto:support@speakout.uz">support@speakout.uz</Link>
                </div>
                <div className={cls.contact}>
                  <span>{t('footer.phone')}</span>
                  <Link sx={{p:0}} href='tel:+1234567890'>+998 (91)-775-09-78</Link>
                </div>
              </div>
            </Box>
            <Box className={cls.apps}>
              <Box sx={{background:'#fff'}} className={cls.app}>
                <img src={Img} alt="" />
                <Button sx={{backgroundColor:'#F43F5E','&:active':{background:'#F43F5E'}, '&:hover':{background:'#F43F5E'}}} variant="M" color="primary" startIcon={<AppleIcon/>}>App Store</Button>
              </Box>
              <Box sx={{background:'#fff'}} className={cls.app}>
                <img src={Img} alt="" />
                <Button sx={{backgroundColor:'#F43F5E', '&:hover':{background:'#F43F5E'}}} variant="M" color="primary" startIcon={<Googleplay fill="white" w="20px" h="20px"/>}>Google Play</Button>
              </Box>
            </Box>
          </Box>
          <Box className={cls.box}>
            <Typography sx={{fontSize:'14px',fontWeight:'400',color:'#858FA3'}}>© 2024. SpeakOut All Rights Reserved.</Typography>
            <Link sx={{p:0}} href=''>
            <Typography sx={{fontSize:'14px',fontWeight:'400',color:'#858FA3'}}>{t('footer.pravicy')}</Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </footer>
  )
}
export default Footer
