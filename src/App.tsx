import 'scss/index.scss'
import Header from 'modules/Header/Header'
import Footer from 'modules/Footer/Footer'
import { ThemeProvider } from '@emotion/react'
import {theme} from './theme'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Main } from './routes/Main'
import { CssBaseline } from '@mui/material'
const root = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
  },
])

function App() {

  return (
    <>
      <div className="app">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <RouterProvider router={root} />
          <Footer />
        </ThemeProvider>
      </div>

    </>
  )
}

export default App
