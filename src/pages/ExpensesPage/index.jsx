import './index.scss'
import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import Header from '../../components/base/Header'
import ButtonCustom from '../../components/atoms/ButtonCustom'
import SearchBar from '../../components/base/SearchBar'
import Divider from '@mui/material/Divider'
function ExpensesPage () {
  return (
    <div className='display-expenses'>
      <Header icon='fas fa-list-alt' title='รายรับรายจ่าย' />
      <div className='box-button'>
        <div className='btn-group-expenses'>
          <ButtonCustom
            title='เพิ่มรายการ'
            icon='fas fa-plus'
            color='primary'
          />
        </div>
      </div>
      <div className='box-search'>
        <SearchBar />
      </div>
    </div>
  )
}

export default ExpensesPage
