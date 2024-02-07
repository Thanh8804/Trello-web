import Box from '@mui/system/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'

function ListColumns() {

  return (
    <Box
      sx = {{
        backgroundColor: 'inherit',
        height: '100%',
        width: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': { m: 2 }
      }}
    >
      {/* Columns*/}
      <Column />
      <Column />
      <Column />

      {/*Button add column*/}
      <Box sx = {{
        minWidth: '200px',
        maxWidth: '200px',
        mx: 1.5,
        height: 'fit-content',
        backgroundColor : '#ffffff3d',
        borderRadius: '6px'
      }}
      >
        <Button
          variant="outlined"
          startIcon = {<AddIcon />}
          sx =
            {{
              color: 'white',
              width: '100%',
              justifyContent: 'flex-start',
              paddingLeft: 2.5,
              py: 1
            }}
        > Add new column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns