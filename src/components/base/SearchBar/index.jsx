import React from 'react'
import './index.scss'
import Box from '@mui/material/Box'
import ButtonCustom from '../../atoms/ButtonCustom'
import Stack from '@mui/material/Stack'

function SearchBar () {
  return (
    <div className='search-bar'>
      <Box
        sx={{
          boxShadow: 3,
          height: '4rem',
          bgcolor: theme =>
            theme.palette.mode === 'dark' ? '#131b28' : '#131b28',
          color: theme => (theme.palette.mode === 'dark' ? 'grey.300' : '#fff'),
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'left',
          fontSize: '1.65rem',
          display: 'flex',
          fontWeight: '700'
        }}
      >
        <Stack direction={'row'} spacing={2}>
          <Box sx={{ width: '250px' }}>
            <input
              type='text'
              className='form-control-search'
              placeholder='ชื่อผู้ใช้'
              required
              onChange={e => setUsername(e.target.value)}
            />
          </Box>
          <Box sx={{ width: '100px' }}>
            <ButtonCustom
              title='ค้นหา'
              icon='fas fa-search'
              color='primary'
              size='medium'
            />
          </Box>
        </Stack>
      </Box>
    </div>
  )
}

export default SearchBar
