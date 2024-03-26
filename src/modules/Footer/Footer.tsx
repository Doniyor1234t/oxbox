import cls from "./style.module.scss"
import { Box, Button, Container, Link } from "@mui/material"
import Logo from "assets/Icons/Logo.tsx"
import { Googleplay } from "src/assets/Icons/GooglePlay";
import Img from "src/assets/Imgs/Download.png";
import AppleIcon from '@mui/icons-material/Apple';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Box sx={{backgroundColor:'background.paper'}} className={cls.body}>
          <Box className={cls.box}>
            <Link sx={{p:'8.2px 5.263px 7.606px 4.094px'}} href='' className={cls.logo}>
              <Logo />
            </Link>
            <Box className={cls.infos}>
              <ul className={cls.menu}>
                <li className={cls.menuItem}><Link sx={{p:0}} href='#'>Возможности</Link></li>
                <li className={cls.menuItem}><Link sx={{p:0}} href='#'>Этапы</Link></li>
                <li className={cls.menuItem}><Link sx={{p:0}} href='#'>Преимущества</Link></li>
                <li className={cls.menuItem}><Link sx={{p:0}} href='#'>Частые вопросы</Link></li>
              </ul>
              <div className={cls.contacts}>
                <div className={cls.contact}>
                  <span>Почта</span>
                  <Link sx={{p:0}} href="">example@speakout.uz</Link>
                </div>
                <div className={cls.contact}>
                  <span>Телефон</span>
                  <Link sx={{p:0}} href='tel:+1234567890'>+998 (91)-775-09-78</Link>
                </div>
              </div>
            </Box>
            <Box className={cls.apps}>
              <Box sx={{background:'#fff'}} className={cls.app}>
                <img src={Img} alt="" />
              <Button sx={{backgroundColor:'#F43F5E','&:focuse':{background:'#F43F5E'}, '&:hover':{background:'#F43F5E'}}} variant="M" color="primary" startIcon={<AppleIcon/>}>App Store</Button>
              </Box>
              <Box sx={{background:'#fff'}} className={cls.app}>
                <img src={Img} alt="" />
                <Button sx={{backgroundColor:'#F43F5E', '&:hover':{background:'#F43F5E'}}} variant="M" color="primary" startIcon={<Googleplay fill="white" w="20px" h="20px"/>}>Google Play</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </footer>
  )
}
export default Footer
