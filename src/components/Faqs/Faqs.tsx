import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material";
import cls from "./style.module.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import faqDb from "./faqDb";

const Faqs = () => {
  return (
    <section>
      <Container>
        <Typography sx={{marginBottom:'40px'}} variant="h2">Часто задаваемые вопросы</Typography>
        <Box className={cls.box}>
          {faqDb.map((item, index) => {
            return (
              <Accordion key={index} defaultExpanded={item?.defaultExpanded?true:false}>
                <AccordionSummary
                  expandIcon={<KeyboardArrowDownIcon />}
                  aria-controls="panel1d-content"
                >
                  <Typography variant="h3">{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="text">{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            );
            }
          )
        }
        </Box>
      </Container>
    </section>
  );
}
export default Faqs;