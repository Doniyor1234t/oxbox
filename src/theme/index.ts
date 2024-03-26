
import { PaletteMode } from "@mui/material";
import { ThemeOptions, createTheme } from "@mui/material/styles";

const getDesignTokens = (mode:PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: "#F43F5E",
      main2: "#FF255F",
      ...(mode === 'dark'&&{
        main: "#FF255F",
        main2: "#F43F5E",
      })
    },
    secondary: {
      main: "#f44336",
    },
    static:{
      main:'#fff'
    },
    
    background: {
      default: "#fff",
      paper: "#F4F5F9",
      paper2: "#ECEEF1",
      ...(mode === 'dark'&&{
        default: "#222A39",
        paper: "#303A4F",
        paper2: "#445371",
      })
    },
    text: {
      main: '#303A4F',
      ...(mode === 'dark' && {main: '#F4F5F9'}),
    },
  },
});

function getTheme(mode: PaletteMode): ThemeOptions {
  return {
    ...getDesignTokens(mode),
    components: {
      MuiAccordion: {
        defaultProps: {
          elevation: 0,
          disableGutters: true,
        },
        styleOverrides: {
          root: ({ theme }) => ({
            padding: 20,
            overflow: 'clip',
            backgroundColor: 'background.paper',
            border:'none',
            '&:first-of-type': {
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            },
            '&:last-of-type': {
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            },
            ...(theme.palette.mode === 'dark' && {
              // backgroundColor: gray[900],
              // borderColor: gray[800],
            }),
          }),
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          expandIconWrapper:{
            borderRadius:'50%', 
            background:'#fff', 
            padding:20
          },
          content: {
            margin:0,
          },
          root: ({ theme }) => ({
            border: 'none',
            borderRadius: 8,
            padding: 0,
            margin:0,
            // '&:hover': { backgroundColor: gray[100] },
            ...(theme.palette.mode === 'dark' && {
              // '&:hover': { backgroundColor: gray[800] },
            }),
          }),
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: {
            backgroundColor: '#fff',
            padding: 20, 
            marginTop: 16,
            borderRadius: 12,
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            '@media (min-width: 1200px)': {
              maxWidth: '1400px',
            },
          },
        },
      },
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h1: "h1",
            h2: "h2",
            h3: 'h3',
            link:'a',
            text:'p',
            h6: "h6",
          }
        },
        styleOverrides: {
          root: {
            fontFamily: "Semibold, sans-serif",
            fontSize: 18,
            fontWeight: 400,
            lineHeight: '145%',
          },
          h1: {
            fontSize: 56,
            fontWeight: 600,
            lineHeight: "125%",
          },
          h2: {
            fontSize: 44,
            fontWeight: 600,
            lineHeight: "125%",
          },
          h3: {
            fontSize: 32,
            fontWeight: 600,
            lineHeight: "130%",
          },
          h6:{
            fontSize: 18,
            fontWeight: 600,
            lineHeight: "120%",
          },
          link: {
            textDecoration: 'none',
            color: "#445371",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: "150%",
          },
          text: {
            fontSize: 18,
            fontWeight: 400,
            lineHeight: "145%",
          }
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({theme}) => ({
            backgroundColor: "#222A39",
            color: "#FFF",
            textTransform: "none",
            fontFamily: "Semibold, sans-serif",
            fontSize: 16,
            fontWeight: 600,
            lineHeight: '125%',
            padding: '20px 32px',
            borderRadius: 16,
            '&:hover': {
              backgroundColor: '#303A4F',
              outline:'4px solid rgba(68, 83, 113, 0.30)',
            },
            '&:active': {
              backgroundColor: '#445371',
              outline:'none',
            },
            ...(theme.palette.mode === 'dark'&&{
              backgroundColor:'#FFF',
              color:'#222A39',
            }),
          }),
          endIcon: {
            marginLeft: 4,
          },
        },
        defaultProps: {
          disableRipple: true,
        },
        variants:[
          {
            props: {variant: 'l', color: 'primary'},
            style: {
              borderRadius: 14,
              fontSize: 14,
              fontWeight: 600,
              lineHeight: '130%',
              padding: '18px 24px',
            },
          },
          {
            props: {variant: 'M', color: 'primary'},
            style: {
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 600,
              lineHeight: '130%',
              padding: '12px 20px',
            },
          },
          {
            props: {variant: 'special', color: 'primary'},
            style: {
              backgroundColor: "#fff",
              color: "#445371",
              '&:hover': {
                backgroundColor: "#fff",
                color: "#445371",
              }, 
              '&:active': {
                backgroundColor: "#fff",
                color: "#445371",
                outline:'none',
              },
            },
          },
        ],
      },
      MuiLink: {
        styleOverrides: {
          root: ({theme}) => ({
            textDecoration: 'none',
            fontFamily: "Semibold, sans-serif",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: "150%",
            color: "#445371",
            padding: '0 32px',
            backgroundColor: 'transparent',
            ...(theme.palette.mode === 'dark'&&{
              color:'#ECEEF1',
            }),
          }),
        },
      },
    },
  };
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    special:true;
    l:true;
    M:true;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsColorOverrides {
    text: true;
  }
}



export const theme = createTheme(getTheme('light'));

