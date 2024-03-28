import { Box, Container, Typography } from "@mui/material";
import cls from "./style.module.scss";
import benDb from "./BenDb";

const Benefits = () => {
  return (
    <section id="benefits">
      <Container>
        <Box sx={{backgroundColor:'background.paper'}} className={cls.body}>
          <Typography variant="h2" >Преимущества</Typography>
          <Box className={cls.box}>
            {benDb.map((item, index) => {
              return (
                <Box key={index} className={cls.item}>
                  <Box className={cls.icon}>
                    <item.icon />
                  </Box>
                  <Box className={cls.content}>
                    <Typography variant="h3">{item.title}</Typography>
                    <Typography variant="text">{item.description}</Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </section>
  );
}
export default Benefits;