import './index.scss'
import React, { useState, useEffect } from 'react'
import Header from '../../components/base/Header'
import ButtonCustom from '../../components/atoms/ButtonCustom'
import CreateListExpenses from '../../components/Modal/CreateListExpenses'
import TableData from '../../components/base/TableData'
import { useSelector, useDispatch } from 'react-redux'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'
import Breadcrumb from '../../components/base/Breadcrumbs'

function ExpensesPage() {
  const dispatch = useDispatch()
  const [isOpenModal, setisOpenModal] = useState(false)
  const expensesList = useSelector(state => state.app?.expensesList)

  const handleClickModal = () => {
    setisOpenModal(!isOpenModal)
  }

  useEffect(() => {
    dispatch.app.FetchExpensesList()
  }, [])

  const header = [
    { id: 1, label: '#', width: '100px' },
    { id: 3, label: 'รายการ', width: '350px' },
    { id: 4, label: 'วันที่', width: '50px' },
    { id: 5, label: 'ราคา', width: '50px' },
    { id: 7, label: 'จัดการ', width: '200px' },

  ]
  return (
    <div className='display-expenses'>
      <Header icon='fas fa-list-alt' title='รายรับรายจ่าย' />
      <div className='box-button'>
        <div className='box-bread'>
          <Breadcrumb current={'รายรับราบจ่าย'}/>
        </div>
        <div className='btn-group-expenses' onClick={() => handleClickModal()}>
          <ButtonCustom
            title='เพิ่มรายการ'
            icon='fas fa-plus'
            color='#1ff675'
          />
        </div>
      </div>
      <div>
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
            <Box className='box-button-search'>
              <ButtonCustom
                title='ค้นหา'
                icon='fas fa-search'
                color='#1ff675'
                size='medium'
              />
            </Box>
          </Stack>
        </Box>
      </div>
      <TableData type={'list'} header={header} data={expensesList} />
      <CreateListExpenses
        open={isOpenModal}
        close={() => setisOpenModal(false)}
      />
    </div >
  )
}

export default ExpensesPage
