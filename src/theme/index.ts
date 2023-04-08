import '@mui/lab/themeAugmentation'
import { createTheme as createMuiTheme } from '@mui/material/styles'
import breakpoints from './breakpoints'
import variants from './variants'
declare module '@mui/material/styles' {
  interface TypeBackground {
    main: string
    light: string
    light2: string
    light3: string
  }
  interface TypeText {
    main: string
    light: string
    general: string
    contrastText: string
  }
}
const createTheme = (name: string) => {
  let themeConfig = variants.find((variant) => variant.name === name)
  if (!themeConfig) {
    themeConfig = variants[0]
  }

  return createMuiTheme(
    {
      spacing: 4,
      breakpoints: breakpoints,
      // @ts-ignore
      components: themeConfig.components,
      // typography: typography,
      palette: themeConfig.palette
    },
    {
      name: themeConfig.name
    }
  )
}

export default createTheme
