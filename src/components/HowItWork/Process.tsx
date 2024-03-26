import { Box, Button, Container, Typography } from "@mui/material";
import cls from "./style.module.scss";
import AppleIcon from '@mui/icons-material/Apple';
import { Googleplay } from "assets/Icons/GooglePlay";
import processDb from "./processDb";

const Process = () => {
  return (
    <section>
      <Container>
        <Box className={cls.body}>
          <Box className={cls.left} sx={{background:'#FF255F', color:'#fff'}}>
            <Typography variant="h2">Как это работает</Typography>
            <Typography sx={{flex:'1 1 auto'}} variant="text">
              Не упустите возможность улучшить свое финансовое положение, уделяя всего несколько минут в день. Зарегистрируйтесь сейчас и начните получать за свое мнение!
            </Typography>
            <div className={cls.btns}>
              <Button variant="special" color="primary" startIcon={<AppleIcon/>}>App Store</Button>
              <Button variant="special" color="primary" startIcon={<Googleplay/>}>Google Play</Button>
            </div>
          </Box>
          <Box className={cls.right}>
            {processDb.map((item, index) => {
              return (
                <Box sx={{backgroundColor:'background.paper'}} key={index} className={cls.item}>
                  <Box className={cls.content}>
                    <Typography variant="h3">{item.title}</Typography>
                    <Typography variant="text" color={'text.main'}>{item.description}</Typography>
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