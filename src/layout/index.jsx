import React from 'react'
import './index.scss'
import { useSelector, useDispatch } from 'react-redux'
import ButtonCustom from '../components/atoms/ButtonCustom'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Profile from '../components/base/Profile'
function Layout () {
  const dispatch = useDispatch()
  const ManuList = [
    { title: 'รายรับรายจ่าย', icon: 'fas fa-list-alt' },
  ]
  return (
    <div className='sidebar'>
      <Profile />
      <MenuList id='composition-menu' aria-labelledby='composition-button'>
        {ManuList.map((x, i) => (
          <MenuItem className='manu-custom' key={i}>
            <i className={x.icon}/>&ensp;{x.title}
          </MenuItem>
        ))}
      </MenuList>
      <Box className='btn-position' justifyContent={'center'} display={'flex'}>
        <ButtonCustom color='error' icon={'fas fa-power-off'} title='ออกจากระบบ' action='logout' />
      </Box>
    </div>
  )
}

export default Layout
