import { useTranslation } from "react-i18next";

const faqDb = () => {
  
  const { t } = useTranslation("translation");
  const faqs = [
    {
      question: t('faqs.questions.1.question'),
      answer: t('faqs.questions.1.answ'),
      defaultExpanded: true
    },
    {
      question: t('faqs.questions.2.question'),
      answer: t('faqs.questions.2.answ')
    },
    {
      question: t('faqs.questions.3.question'),
      answer: t('faqs.questions.3.answ')
    },
    {
      question: t('faqs.questions.4.question'),
      answer: t('faqs.questions.4.answ')
    },
    {
      question: t('faqs.questions.5.question'),
      answer: t('faqs.questions.5.answ')
    }
  ]
  return faqs;
}
export default faqDb;