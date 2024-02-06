import Box from '@mui/system/Box'

function BoardContent() {
  return (
    <Box sx = {{
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      width: '100%',
      height: (theme) => `calc(100vh - ${ theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
      display: 'flex',
      alighItems: 'center'
    }}>
                            Borad center
    </Box>
  )
}
export default BoardContent
