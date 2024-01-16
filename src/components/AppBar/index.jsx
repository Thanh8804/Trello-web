//header trong cấu trúc html
import Box from '@mui/system/Box'
import ModeSelect from '../ModeSelect'

function AppBar() {
  return (
    <Box sx = {{
      backgroundColor: 'primary.light',
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alightItems: 'center'
    }}>
      <ModeSelect />
    </Box>
  )
}

export default AppBar
