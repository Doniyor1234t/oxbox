import { Box, Button, Container, Link, MenuItem, Popper, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Logo from 'src/assets/Icons/Logo';
import cls from './style.module.scss';
import React, { useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import { Uzb } from 'src/assets/Icons/Uzb';
import { Ru } from 'src/assets/Icons/Ru';
import { Eng } from 'src/assets/Icons/Eng';
import { Kz } from 'src/assets/Icons/Kz';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  return (
    <header className={cls.header}>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin:'6px 0' }}>
          <Link sx={{p:0}} href="/" className={cls.logo}>
            <Logo />
          </Link>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href='#'>Возможности</Link>
            <Link href='#'>Этапы</Link>
            <Link href='#'>Преимущества</Link>
            <Link href='#'>Частые вопросы</Link>
          </Box>
          <Box sx={{display:'flex', gap:'12px'}}>
            <Box sx={{ display: 'flex', gap: 2 }}>
            <button className={cls.langBtn} aria-describedby={id} type="button" onClick={handleClick}>
              <LanguageIcon />
            </button>
            <Popper placement={'bottom-start'} id={id} open={open} anchorEl={anchorEl}>
              <Box sx={{width:220, border:'1px solid rgba(68, 83, 113, 0.15)', borderRadius:'20px',p: '8px 0', bgcolor: 'background.default' }}>
                <MenuItem sx={{padding:'12px 32px'}} className={cls.langItem} onClick={handleClick}><Uzb /> O’zbekcha</MenuItem>
                <MenuItem sx={{padding:'12px 32px'}} className={cls.langItem} onClick={handleClick}><Ru />Русский</MenuItem>
                <MenuItem sx={{padding:'12px 32px'}} className={cls.langItem} onClick={handleClick}><Eng/>English</MenuItem>
                <MenuItem sx={{padding:'12px 32px'}} className={cls.langItem} onClick={handleClick}><Kz/>Қазақша</MenuItem>
              </Box>
            </Popper>
            </Box>
            <Button variant="l" color="primary" endIcon={<ArrowForwardIcon/>}>Войти </Button>
          </Box>
        </Box>
      </Container>
    </header>
  );
}
export default Header;