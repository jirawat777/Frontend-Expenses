import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import ButtonCustom from '../../atoms/ButtonCustom';
import CreateListExpenses from '../../Modal/CreateListExpenses';
import { Modal, ButtonToolbar, Button } from 'rsuite';
import RemindIcon from '@rsuite/icons/legacy/Remind';
import './index.scss'

function TableData(props) {
  const { data, header, type } = props
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isOpenModal, setisOpenModal] = useState(false)
  const [payload, setpayload] = useState([])

  const [openDelete, setOpenDelete] = useState(false);

  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClick = (data) => {
    setpayload(data)
    setisOpenModal(true)
  }
  useEffect(() => {
    if (isOpenModal === false) {
      setpayload([])
    }
  }, [data, isOpenModal])

  const ExpensesList = (row, i) => {
    const date = row?.create_date?.split('T')[0]
    return (
      <TableRow hover role="checkbox" tabIndex={-1} key={i}>
        <TableCell align={'center'} className='body-table'>
          {i + 1}
        </TableCell>
        <TableCell className='body-table'>
          {row.name}
        </TableCell>
        <TableCell align={'center'} className='body-table'>
          {date}
        </TableCell>
        <TableCell align={'center'} className='body-table'>
          {row.price} บาท
        </TableCell>
        <TableCell className='body-table'>
          <Stack direction={'row'} spacing={2} justifyContent={'center'}>
            <div className='box-manage' onClick={() => handleClick(row)}>
              <ButtonCustom title='แก้ไข' icon='fas fa-edit' font='#fff' color="#131B28" />
            </div>
            <div className='box-manage' onClick={() => handleOpenDelete()} >
              <ButtonCustom title='ลบ' icon='fas fa-times' font='#fff' color="red" />
            </div>
          </Stack>
        </TableCell>
      </TableRow>
    )
  }
  return (
    <div className='table-style'>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table" >
            <TableHead >
              <TableRow >
                {header?.map((column, i) => (
                  <TableCell
                    className='header-table'
                    key={i}
                    align={'center'}
                    width={column?.width}
                  >
                    {column?.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => {
                if (type === 'list') {
                  return ExpensesList(row, i)
                }
              })}
            </TableBody>
          </Table>
        </TableContainer>
        {data?.length > 9 &&
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={data?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        }
      </Paper>
      <CreateListExpenses
        open={isOpenModal}
        close={() => setisOpenModal(false)}
        data={payload}
      />
      <Modal backdrop="static" role="alertdialog" open={openDelete} onClose={handleCloseDelete} size="xs" className='alert-modal'>
        <Modal.Title><h5>แจ้งเตือน</h5></Modal.Title>
        <Modal.Body>
          ลบรายการ ?
        </Modal.Body>
        <Modal.Footer>
          <Stack direction={'row'} spacing={2} justifyContent={'end'}>
            <div className='box-manage' onClick={() => handleCloseDelete()}>
              <ButtonCustom title='ยืนยัน' icon='fas fa-save' size='small' font='#19202c' color="#1ff675" />
            </div>
            <div className='box-manage' onClick={() => handleCloseDelete()} >
              <ButtonCustom title='ลบ' icon='fas fa-times' size='small' font='#fff' color="red" />
            </div>
          </Stack>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default TableData