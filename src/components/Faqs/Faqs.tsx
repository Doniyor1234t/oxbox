import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material";
import cls from "./style.module.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import faqDb from "./faqDb";
import { useTranslation } from "react-i18next";

const Faqs = () => {
  const {t} = useTranslation("translation");
  return (
    <section id="faqs">
      <Container>
        <Typography sx={{marginBottom:'40px'}} variant="h2">{t("faqs.title")}</Typography>
        <Box className={cls.box}>
          {faqDb().map((item, index) => {
            return (
              <Accordion key={index} defaultExpanded={item?.defaultExpanded?true:false}>
                <AccordionSummary
                  expandIcon={<KeyboardArrowDownIcon />}
                  aria-controls="panel1d-content"
                >
                  <Typography variant="h3">{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="p">{item.answer}</Typography>
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