import Box from '@mui/system/Box'
import Chip from '@mui/material/Chip'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'

const MENU_STYLES = {
  color: 'primary.main',
  backgroundColor: 'white',
  border: 'none',
  borderRadius: '4px',
  padding:'5px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover':{
    backgroundColor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx = {{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingX: 2,
      gap: 2,
      overflowX: 'auto',
      borderTop: '1px solid #00bfa5'
    }}>

      <Box sx = {{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip icon={<SpaceDashboardIcon/>}
          sx = {MENU_STYLES}
          clickable
          label="ThanhDev MERN Stack Board"
        />

        <Chip icon={<VpnLockIcon/>}
          sx = {MENU_STYLES}
          clickable
          label="Public/Private Workspace"
        />

        <Chip icon={<AddToDriveIcon/>}
          sx = {MENU_STYLES}
          clickable
          label="Add To Google Drive"
        />

        <Chip icon={<BoltIcon/>}
          sx = {MENU_STYLES}
          clickable
          label="Automation"
        />

        <Chip icon={<FilterListIcon/>}
          sx = {MENU_STYLES}
          clickable
          label="Filter" />
      </Box>

      <Box sx = {{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined" startIcon ={<PersonAddIcon />}> Invite </Button>
        <AvatarGroup max={4}
          sx = {{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16
            }
          }}
        >
          <Tooltip title = "ThanhDev">
            <Avatar alt="ThanhDev" src="https://avatars.githubusercontent.com/u/112085795?s=96&v=4" />
          </Tooltip>
          <Tooltip title = "Travis Howard">
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </Tooltip>
          <Tooltip title = "Cindy Baker">
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </Tooltip>
          <Tooltip>
            <Avatar alt="Agnes Walker" src="https://avatars.githubusercontent.com/u/112085795?s=96&v=4" />
          </Tooltip>
          <Tooltip>
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </Tooltip>

        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
