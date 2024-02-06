
import { orange, teal, deepOrange, cyan } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  // colorSchemes: {
  //   light: {
  //     palette: {
  //       primary: teal,
  //       secondary:deepOrange
  //     }
  //   },
  //   dark: {
  //     palette: {
  //       primary:cyan,
  //       secondary:orange
  //     }
  //   }
  // },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: 'none',
          borderWidth: '1px'
        }
      }
    }
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root:
        {
          // color: theme.palette.primary.main,
          fontSize: '0.875rem',
          '& fieldset':
            {
              borderWidth: '0.5px !important'
            },
          '&.Mui-focused fieldset':
            {
              borderWidth: '1.5px !important'
            },
          '&:hover fieldset':
            {
              borderWidth: '1.5px !important'
            }
        }
    }
  },

  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: '0.875rem'
      }
    }
  }

  // ...other properties
})

export default theme
