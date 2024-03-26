
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
    background: {
      default: "#fff",
      paper: "#F4F5F9",
      ...(mode === 'dark'&&{
        default: "#222A39",
      })
    },
  },
});

function getTheme(mode: PaletteMode): ThemeOptions {
  return {
    ...getDesignTokens(mode),
    components: {
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
            link:'a',
            text:'p',
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
  }
}



export const theme = createTheme(getTheme('light'));

