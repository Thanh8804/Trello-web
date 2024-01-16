import Box from '@mui/system/Box'


function BoardBar() {
  return (
    <Box sx = {{
      backgroundColor: 'primary.dark',
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alightItems: 'center'
    }}>
      Board Bar
    </Box>
  )
}

export default BoardBar