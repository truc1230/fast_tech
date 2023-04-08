/** @format */
import AdapterDateFns from '@mui/lab/AdapterDateFns'
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { StyledEngineProvider, ThemeProvider as MuiThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import jssPreset from '@mui/styles/jssPreset'
import StylesProvider from '@mui/styles/StylesProvider'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { create } from 'jss'
import { ConfirmProvider } from 'material-ui-confirm'
import { useAppSelector } from 'stores'
import { ThemeProvider } from 'styled-components'
import createTheme from 'theme'

interface StoreProviderProps {
  children: React.ReactNode
}

const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById('jss-insertion-point')!
})

function ThemeProviders(props: StoreProviderProps) {
  const themeColor = useAppSelector((state) => state.theme.themeColor)
  return (
    <StylesProvider jss={jss}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StyledEngineProvider injectFirst>
          <MuiThemeProvider theme={createTheme(themeColor)}>
            <ThemeProvider theme={createTheme(themeColor)}>
              <ConfirmProvider>{props.children}</ConfirmProvider>
            </ThemeProvider>
          </MuiThemeProvider>
        </StyledEngineProvider>
      </LocalizationProvider>
    </StylesProvider>
  )
}

export default ThemeProviders
