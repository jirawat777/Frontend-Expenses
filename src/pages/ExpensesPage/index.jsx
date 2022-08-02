import './index.scss'
import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import Header from '../../components/base/Header'
import ButtonCustom from '../../components/atoms/ButtonCustom'
import SearchBar from '../../components/base/SearchBar'
import Divider from '@mui/material/Divider'
import CreateListExpenses from '../../components/Modal/CreateListExpenses'
function ExpensesPage () {
  const [isOpenModal, setisOpenModal] = useState(false)
  const handleClickModal = () => {
    setisOpenModal(!isOpenModal)
  }
  return (
    <div className='display-expenses'>
      <Header icon='fas fa-list-alt' title='รายรับรายจ่าย' />
      <div className='box-button'>
        <div className='btn-group-expenses' onClick={() => handleClickModal()}>
          <ButtonCustom
            title='เพิ่มรายการ'
            icon='fas fa-plus'
            color='#1ff675'
          />
        </div>
      </div>
      <CreateListExpenses
        open={isOpenModal}
        close={() => setisOpenModal(false)}
      />
    </div>
  )
}

export default ExpensesPage
