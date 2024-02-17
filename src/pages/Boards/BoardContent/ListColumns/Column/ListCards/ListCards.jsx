import Card from './Card/Card'
import Box from '@mui/system/Box'

function ListCards() {
  return (
    <Box sx = {{
      display: 'flex',
      p: '0 5px',
      m: '0 3px',
      flexDirection: 'column',
      gap: 1,
      maxHeight: (theme) => `calc(
                ${theme.trello.boardContentHeight} - 
                ${theme.trello.columnHeaderHeight} - 
                ${theme.trello.columnFooterHeight} - 
                ${theme.spacing(5)}
              )`,
      '& .MuiPaper-root': {
        overflow: 'unset'
      },
      overflowY: 'auto',
      overflowX: 'hidden',
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#ced0da'
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#bfc2cf'
      }
    }}>
      <Card />
      <Card temporaryHideMedia/>
      <Card temporaryHideMedia/>
      <Card temporaryHideMedia/>
      <Card temporaryHideMedia/>
      <Card temporaryHideMedia/>
      <Card temporaryHideMedia/>
    </Box>
  )
}

export default ListCards