import React from 'react'
import './index.scss'
import { useDispatch } from 'react-redux'
import ButtonCustom from '../components/atoms/ButtonCustom'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Profile from '../components/base/Profile'
import { Sidenav, Nav } from 'rsuite'
import DashboardIcon from '@rsuite/icons/legacy/Dashboard'
import GroupIcon from '@rsuite/icons/legacy/Group'
import MagicIcon from '@rsuite/icons/legacy/Magic'
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle'

function Layout () {
  const dispatch = useDispatch()

  const ManuList = [
    { title: 'หน้าแรก', icon: 'fas fa-list-alt' },
    { title: 'รายรับรายจ่าย', icon: 'fas fa-list-alt' }
  ]
  return (
    <div className='sidebar'>
      <Profile />
      <MenuList id='composition-menu' aria-labelledby='composition-button'>
        {ManuList.map((x, i) => (
          <MenuItem className='manu-custom' key={i}>
            <i className={`${x.icon}`} />
            <span className='sidebar-title'>{x.title}</span>
          </MenuItem>
        ))}
      </MenuList>
      <Box className='btn-position' justifyContent={'center'} display={'flex'}>
        <ButtonCustom
          color='red'
          font='#fff'
          icon={'fas fa-power-off'}
          title='ออกจากระบบ'
          action='logout'
        />
      </Box>
    </div>
  )
}

export default Layout
