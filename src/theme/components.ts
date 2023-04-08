/** @format */

const components = {
  MuiButtonBase: {
    styleOverrides: {
      root: {
        textTransform: 'none!important'
      }
    }
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        borderRadius: '.4rem!important',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF!important',
        '&::before': {
          display: 'none'
        }
      }
    }
  },
  MuiTab: {
    styleOverrides: {
      root: {}
    }
  },
  MuiDataGrid: {
    styleOverrides: {
      columnHeaders: {
        // backgroundColor: "white",
      }
    }
  }
}
export const woodComponent = {
  // MuiCardContent
  MuiCard: {
    styleOverrides: {
      root: {}
    }
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        backgroundColor: 'white!important'
      }
    }
  }
}

export default components
