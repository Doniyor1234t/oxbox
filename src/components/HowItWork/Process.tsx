import { Box, Button, Container, Typography } from "@mui/material";
import cls from "./style.module.scss";
import AppleIcon from '@mui/icons-material/Apple';
import { Googleplay } from "assets/Icons/GooglePlay";
import processDb from "./processDb";
import { useTranslation } from "react-i18next";

const Process = () => {
  const { t } = useTranslation("translation");

  return (
    <section id="process">
      <Container>
        <Box className={cls.body}>
          <div className={cls.sticky}>
            <Box className={cls.left} sx={{background:'#FF255F', color:'#fff'}}>
              <Typography variant="h2">{t('process.title')}</Typography>
              <Typography sx={{flex:'1 1 auto'}} variant="p">
              {t('process.subtitle')}
              </Typography>
              <div className={cls.btns}>
                <Button onClick={()=> window.location.href = ('https://apps.apple.com/app/id1558126252')} variant="special" color="primary" startIcon={<AppleIcon/>}>App Store</Button>
                <Button onClick={()=> window.location.href = ('https://play.google.com/store/apps/details?id=uz.udevs.dzhehuti_respondent_mobile&hl=ru&gl=US')} variant="special" color="primary" startIcon={<Googleplay/>}>Google Play</Button>
              </div>
            </Box>
          </div>
          <Box className={cls.right}>
            {processDb().map((item, index) => {
              return (
                <Box sx={{backgroundColor:'background.paper'}} key={index} className={cls.item}>
                  <Box className={cls.content}>
                    <Typography variant="h3">{index +  1 + '. ' + item.title}</Typography>
                    <Typography variant="p" color={'p.main'}>{item.description}</Typography>
                  </Box>
                  <div className={cls.img}>
                    <img src={item.img} alt="" />
                  </div>
                </Box>
              );
            })}
          </Box>

        </Box>
      </Container>
    </section>
  );
}
export default Process;