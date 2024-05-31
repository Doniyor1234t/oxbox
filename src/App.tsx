import 'scss/index.scss'
import Header from 'modules/Header/Header'
import Footer from 'modules/Footer/Footer'
import { ThemeProvider } from '@emotion/react'
import {theme} from './theme'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Main } from './routes/Main'
import { CssBaseline } from '@mui/material'
import ReactLenis from '@studio-freight/react-lenis'
import "./i18next";
import PreloaderProvider from './providers/Preloader'

const root = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
  },
])

function App() {
  // const lenisRef = useRef()
  
  return (
    <>
      <PreloaderProvider />
      <ReactLenis root>
        <div className="app" >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <RouterProvider router={root} />
            <Footer />
          </ThemeProvider>
        </div>
      </ReactLenis>
    </>
  )
}

export default App
