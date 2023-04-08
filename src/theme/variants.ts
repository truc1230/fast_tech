import { blue } from '@mui/material/colors'
import merge from 'deepmerge'
import { THEMES } from '../utils/constants'
import components, { woodComponent } from './components'

const defaultVariant = {
  palette: {
    mode: 'light',
    primary: {
      main: blue[700],
      contrastText: '#FFF'
    },
    secondary: {
      main: blue[500],
      contrastText: '#FFF'
    },
    background: {
      default: '#F7F9FC',
      paper: '#FFF'
    },
    main: {
      main: '#595959',
      contrastText: '#FFF'
    },
    addition: {
      main: '#646464',
      light: '',
      contrastText: '#FFF'
    },
    text: {
      placeholder: 'hwb(0deg 34% 65% / 60%)',
      general: '#131625'
    }
  },
  components
}
const steelVariant = merge(defaultVariant, {
  name: THEMES.STEEL,
  palette: {
    primary: {
      main: '#757575',
      contrastText: '#FFF'
    },
    border: {
      main: '#757575'
    },
    secondary: {
      main: 'rgba(221, 230, 216, 0.75)',
      contrastText: '#FFF'
    },
    main: {
      main: '#687321',
      contrastText: '#FFF'
    },
    // addition: {
    //   main: '#646464',
    //   light: '#595959',
    //   contrastText: '#FFF'
    // },
    background: {
      main: '#757575',
      light: '#E0E0E0B8',
      light2: '#F0F0F0',
      light3: '#e0e0e0',
      plus: '#B5B5B524',
      img: 'abstract-background-from-silver-metal-plate-shiny-surface-material.jpg'
    },
    text: { main: '#646464', light: '#595959', contrastText: '#FFF', general: '#757575' },
    button: {
      primary: 'linear-gradient(90deg, #AFAFAF,#595959,#4E4E4E ,#AFAFAF )'
    }
  }
})

const waterVariant = merge(defaultVariant, {
  name: THEMES.WATER,
  palette: {
    primary: {
      main: '#0044CA',
      contrastText: '#FFF'
    },
    border: {
      main: '#3C6AB9'
    },
    secondary: {
      main: '#D9EAFBBF',
      contrastText: '#FFF'
    },
    main: {
      main: '#687321',
      contrastText: '#FFF'
    },
    // addition: {
    //   main: '#0E2756',
    //   light: '#4395EB',
    //   contrastText: '#FFF'
    // },
    background: {
      main: '#0044CA',
      light: '#D9EAFBBF',
      light2: '#E5F6FC',
      light3: '#d9eafb',
      plus: '#80A3FF21',
      img: 'abstract_shape_with_halftone_background.jpg'
    },
    text: { general: '#0044CA', main: '#0044CA', light: '#4395EB', contrastText: '#FFF' },
    button: {
      primary: 'linear-gradient(90deg, #00C2FF,#0085FF,#0044CA  ,#00C2FF  )'
    }
  },
  components
})

const woodVariant = merge(defaultVariant, {
  name: THEMES.WOOD,
  palette: {
    primary: {
      main: '#135331',
      contrastText: '#FFF'
    },
    border: {
      main: '#687321'
    },
    secondary: {
      main: 'rgba(221, 230, 216, 0.75)',
      contrastText: '#FFF'
    },
    main: {
      main: '#687321',
      contrastText: '#FFF'
    },
    addition: {
      main: '#599735',
      light: '#599735',
      contrastText: '#FFF'
    },
    background: {
      main: '#135331',
      light: '#DDE6D8BF',
      light2: '#DFE7D3',
      light3: '#dde6d8',
      plus: '#DFE7D3',
      img: 'green-slate.jpg'
    },

    text: {
      main: '#135331'
    },
    button: {
      primary: 'linear-gradient(90deg, #53A523,#1E6604,#135331 ,#53A523 )'
    }
  },
  components: woodComponent
})
const earthVariant = merge(defaultVariant, {
  name: THEMES.EARTH,
  palette: {
    primary: {
      main: '#553D33',
      contrastText: '#FFF',
      light: '#D2AD9D'
    },
    border: {
      main: '#D2AD9D'
    },
    secondary: {
      main: 'rgba(221, 230, 216, 0.75)',
      contrastText: '#FFF'
    },
    main: {
      main: '#687321',
      contrastText: '#FFF'
    },
    // addition: {
    //   main: '#646464',
    //   light: '#6E554A',
    //   contrastText: '#FFF'
    // },
    background: {
      main: '#553D33',
      light: '#FBF4EDBF',
      light2: '#F6EEE3',
      light3: '#fbf4ed',
      plus: '#FFD48021',
      img: 'brown-grunge-texture.jpg'
    },
    text: { main: '#646464', light: '#6E554A', contrastText: '#FFF', general: '#553D33' },
    button: {
      primary: 'linear-gradient(90deg, #D2AD9D,#553D33,#6E554A ,#D2AD9D )'
    }
  }
})

const gradientVariant = merge(defaultVariant, {
  name: THEMES.GRADIENT,
  palette: {
    primary: {
      main: 'rgb(27 125 87)',
      contrastText: '#FFF',
      light:
        'linear-gradient(101.91deg, rgba(20, 71, 230, 0.2) 1.61%, rgba(51, 223, 157, 0.2) 100%)'
    },
    border: {
      main: '#1447E6'
    },

    secondary: {
      main: '#A7ECD2',
      contrastText: '#1447E6;'
    },
    main: {
      main: '#687321',
      contrastText: '#FFF'
    },
    // addition: {
    //   main: '#141416',
    //   light: '#s33DF9D',
    //   contrastText: '#FFF'
    // },
    background: {
      main: 'linear-gradient(101.91deg, #1447E6 1.61%, #33DF9D 100%)',
      light:
        'linear-gradient(101.91deg, rgba(20, 71, 230, 0.1) 1.61%, rgba(51, 223, 157, 0.1) 100%)',
      light2: '#FFFFEE80',
      light3: 'linear-gradient(101.91deg, rgba(20, 71, 230, 1 ) 1.61%, rgba(51, 223, 157, 1) 100%)',
      plus: '#A7ECD299'
    },
    text: {
      general: '#000',
      main: '#141416',
      light: '#s33DF9D',
      contrastText: '#FFF'
    },
    button: {
      primary: 'linear-gradient(101.91deg, #1447E6 1.61%, #33DF9D 100%)'
    }
  }
})

const variants: Array<any> = [
  steelVariant,
  waterVariant,
  woodVariant,
  earthVariant,
  gradientVariant
]

export default variants

export type VariantType = {
  name: string
  palette: {
    primary: MainContrastTextType
    secondary: MainContrastTextType
  }
  header: ColorBgType & {
    search: {
      color: string
    }
    indicator: {
      background: string
    }
  }
  footer: ColorBgType
  sidebar: ColorBgType & {
    header: ColorBgType & {
      brand: {
        color: string
      }
    }
    footer: ColorBgType & {
      online: {
        background: string
      }
    }
    badge: ColorBgType
  }
}

type MainContrastTextType = {
  main: string
  contrastText: string
}
type ColorBgType = {
  color: string
  background: string
}
