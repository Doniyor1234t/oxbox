import { Box, Button, Container, Link, MenuItem, Popper } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Logo from 'src/assets/Icons/Logo';
import cls from './style.module.scss';
import React, { useEffect,  useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import { Ru } from 'src/assets/Icons/Ru';
import { Uzb } from 'src/assets/Icons/Uzb';
import { Eng } from 'src/assets/Icons/Eng';
import { Kz } from 'src/assets/Icons/Kz';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

// const lngs = {
//   en: { nativeName: "English" },
//   ru: { nativeName: "Русский" },
// };


const Header = () => {
  const { t, i18n } = useTranslation("translation");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [allowScrollHandling, setAllowScrollHandling] = useState(true);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    
    i18n.changeLanguage(event.currentTarget.id)
    console.log(i18n);
  };
    const [selectedSection, setSelectedSection] = useState('opportunities');
    
    const scrollToSection = (targetId: string, e: any) => {
      const targetElement = document.getElementById(targetId);
      setSelectedSection(targetId);
      e.preventDefault();
      setAllowScrollHandling(false);
      
      
      const targeted = document.getElementById(selectedSection) as HTMLElement;

      if (targetElement) {
        if (targeted.parentElement) {
          targeted.parentElement.classList.remove(cls.active);
          targeted.parentElement.classList.add(cls.active);
        }
        const endPosition = targetElement.offsetTop - 100;
        let scrollProxy = { y: window.scrollY };

        gsap.to(scrollProxy, {
          y: endPosition,
          duration: 0.5,
          ease: "power1.inOut",
          onUpdate: () => window.scrollTo(0, scrollProxy.y),
          onComplete: () => setAllowScrollHandling(true)
        });
      }
    };
  
  
  const handleScroll = () => {
    if (!allowScrollHandling) return;

    const sections = ['opportunities', 'process', 'benefits', 'faqs'];
    const offset = 100;

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      const links = document.querySelectorAll(`.${cls.menuItem}`);
      if (sectionElement) {
        const sectionOffsetTop = sectionElement.offsetTop;
        const sectionOffsetBottom = sectionElement.offsetTop + sectionElement.offsetHeight;
        const scrollPosition = window.scrollY;
        const link = links[sections.indexOf(section)]
        
        if (scrollPosition >= sectionOffsetTop - offset && sectionOffsetBottom - offset >= scrollPosition) {
          setSelectedSection(section);
          link.classList.add(cls.active);
        }
      }
    });
  };

  useEffect(() => {
    const activeBg = document.querySelector(`.${cls.activeBg}`) as HTMLElement;
    const actived = document.querySelector(`.${cls.active}`) as HTMLElement;
    
    activeBg.style.left = `${actived.offsetLeft}px`;
    activeBg.style.width = `${actived.offsetWidth}px`;
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selectedSection, allowScrollHandling]);
  const sections = [
    { id: 'opportunities', label: t('header.navbar.opportunities') },
    { id: 'process', label: t('header.navbar.process') },
    { id: 'benefits', label: t('header.navbar.benefits') },
    { id: 'faqs', label: t('header.navbar.faqs') },
  ];
  
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  return (
    <header className={cls.header}>
      <Container>
        <Box sx={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin:'6px 0',
          '@media (max-width: 768px)': {
            margin:'12px 0'
          }
        }}>
          <Link sx={{p:0}} href="/" className={cls.logo}>
            <Logo />
          </Link>
          <Box className={cls.menu} sx={{ 
            overflow:'hidden',
            position:'relative', 
            display: 'flex', 
            padding:'4px', 
            borderRadius:'28px', 
            height:'56px', 
            backgroundColor:'background.default',
            '@media (max-width: 768px)': {
              display:'none'
            }
          }}>
            <span className={cls.activeBg}></span>
            {sections.map((section, index) => (
              <MenuItem key={index} className={`${cls.menuItem} ${selectedSection === section.id ? cls.active : ''}`}>
                <Link onClick={(e) => scrollToSection(section.id, e)}>{section.label}</Link>
              </MenuItem>
            ))}

          </Box>
          <Box sx={{display:'flex', gap:'12px'}}>
            <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant='l' sx={{background:'#fff', color:'#222A39', '&:hover':{background:'#F4F5F9', outline:'none'}}} className={cls.langBtn} aria-describedby={id} type="button" onClick={handleClick}>
              <LanguageIcon />
            </Button>
            <Popper sx={{zIndex:100, }} placement={'bottom-start'} id={id} open={open} anchorEl={anchorEl}>
              <Box sx={{width:220, marginTop:'10px', border:'1px solid rgba(68, 83, 113, 0.15)', borderRadius:'20px',p: '8px 0', bgcolor: 'background.default' }}>
                <MenuItem id='uz' sx={{padding:'12px 32px'}} className={cls.langItem} onClick={handleClick}><Uzb /> O’zbekcha</MenuItem>
                <MenuItem id='ru' sx={{padding:'12px 32px'}} className={cls.langItem} onClick={handleClick}><Ru />Русский</MenuItem>
                <MenuItem id='en' sx={{padding:'12px 32px'}} className={cls.langItem} onClick={handleClick}><Eng/>English</MenuItem>
              </Box>
            </Popper>
            </Box>
            <Button variant="l" endIcon={<ArrowForwardIcon/>}>{t('header.navbar.login')} </Button>
          </Box>
        </Box>
      </Container>
    </header>
  );
}
export default Header;