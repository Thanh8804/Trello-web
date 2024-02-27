import Box from '@mui/system/Box'
import React from 'react'
import ListColumns from './ListColumns/ListColumns'
import Column from './ListColumns/Column/Column'


function BoardContent({ board }) {

  return (
    <Box sx = {{
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      width: '100%',
      height: (theme) => theme.trello.boardContentHeight,
      p: '10px 0'
    }}>
      <ListColumns columns = {board?.columns} />
    </Box>
  )
}
export default BoardContent
