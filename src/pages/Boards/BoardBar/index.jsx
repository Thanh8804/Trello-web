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
  color: 'white',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '4px',
  padding:'5px',
  '& .MuiSvgIcon-root': {
    color: 'white'
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
      borderBottom: '1px solid #e0e0e0',
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
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
        <Button
          variant="outlined" 
          startIcon = {<PersonAddIcon />}
          sx =
          {{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white'}
          }}
        > Invite 
        </Button>
        <AvatarGroup
          max={4}
          sx = {{
            //gap: '10px',
            '& .MuiAvatar-root': {
              width: 36,
              height: 36,
              fontSize: 16,
              border: 'none',
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
