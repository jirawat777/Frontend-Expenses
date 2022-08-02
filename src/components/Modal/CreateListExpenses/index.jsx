import React, { useState } from 'react'
import { Modal, Placeholder } from 'rsuite'
import TextField from '@mui/material/TextField'
import './index.scss'
import ButtonCustom from '../../atoms/ButtonCustom'

function CreateListExpenses (props) {
  const { open, close } = props
  const [backdrop, setBackdrop] = useState('static')
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Modal
        backdrop={backdrop}
        keyboard={false}
        open={open}
        onClose={() => close()}
        className='modal-create'
      >
        <Modal.Header>
          <Modal.Title>เพิ่มรายการ</Modal.Title>
        </Modal.Header>

        <Modal.Body className='textfield-round' >
          <TextField id='outlined-basic' label='Outlined' variant='outlined' />
        </Modal.Body>
        <Modal.Footer>
          <div className='modal-footer'>
            <div onClick={() => close()}>
              <ButtonCustom
                title='ยืนยัน'
                size='small'
                icon='fas fa-save'
                color='#1ff675'
              />
            </div>
            <div onClick={() => close()}>
              <ButtonCustom
                title='ยกเลิก'
                size='small'
                font='#fff'
                icon='fas fa-times'
                color='#ff0000'
              />
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CreateListExpenses
