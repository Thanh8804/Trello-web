import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Card as MUICard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import AttachmentIcon from '@mui/icons-material/Attachment'
import CommentIcon from '@mui/icons-material/Comment'
import GroupIcon from '@mui/icons-material/Group'


function Card( {temporaryHideMedia} ) {
  if (temporaryHideMedia === true)
  {
    return (
      <MUICard sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0,0,0,0.2)'
      }}>
        <CardContent sx = {{
          p: 1.5,
          '&:last-child': { pb: 1.5 }
        }}>
          <Typography>
                            Card 01
          </Typography>
        </CardContent>
      </MUICard>
    )
  }
  return (
    <MUICard sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0,0,0,0.2)'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://trungquandev.com/wp-content/uploads/2022/07/fair-mern-stack-advanced-banner-trungquandev-1024x576.jpg"
        title="TrungQuanDev"
      />
      <CardContent sx = {{
        p: 1.5,
        '&:last-child': { pb: 1.5 }
      }}>
        <Typography>
                    TrungQuanDev MERN Stack
        </Typography>
      </CardContent>
      <CardActions sx = {{
        p : '0 4px 8px 4px'
      }}>
        <Button size="small" startIcon = {<GroupIcon/>}> 20 </Button>
        <Button size="small" startIcon = {<CommentIcon/>}> 15 </Button>
        <Button size="small" startIcon = {<AttachmentIcon/>}> 10 </Button>
      </CardActions>
    </MUICard>
  )
}

export default Card