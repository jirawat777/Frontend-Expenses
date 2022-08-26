import React, { useState, useEffect } from 'react'
import { Modal, Placeholder } from 'rsuite'
import { Input } from 'rsuite'
import './index.scss'
import ButtonCustom from '../../atoms/ButtonCustom'
import { Stack, Divider, DatePicker, Whisper, Tooltip } from 'rsuite'
import moment from 'moment'

function CreateListExpenses(props) {
  const { open, close, data } = props
  const [backdrop, setBackdrop] = useState('static')
  const [name, setname] = useState('')
  const [price, setprice] = useState('')
  const [date, setdate] = useState(new Date())
  const [distination, setdistination] = useState('')
  const [description, setdescription] = useState('')

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    if (data) {
      const momentObj = moment(data?.create_date).format('YYYY-MM-DD')
      const date = new Date(momentObj)
      setname(data.name)
      setdate(date)
      setprice(data.price)
      setdistination(data.destination)
      setdescription(data.description)
    } else {
      setname('')
      setprice('')
      setdate(new Date())
      setdistination('')
      setdescription('')
    }
  }, [data])

  const handleClear = () => {
    close()
  }
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
          <Modal.Title>{data ? 'แก้ไขรายการ' : 'เพิ่มรายการ'}</Modal.Title>
        </Modal.Header>

        <Modal.Body className='content-modal'>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            divider={<Divider vertical />}
          >
            <span>ชื่อรายการ</span>
            <Input placeholder='ชื่อรายการ' value={name} className='input-custom' />
            <span>ราคา</span>
            <Input placeholder='ราคา' value={price} className='input-custom' />
          </Stack>
          <br />
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            divider={<Divider vertical />}
          >
            <span>วันที่ซื้อ</span>
            <DatePicker value={date} onChange={setdate} className='datePicker-custom' />
            <span>วิธีการชำระเงิน</span>
            <Whisper
              trigger='focus'
              speaker={
                <Tooltip className='tooltip-custom'>
                  เช่น บัตรเครดิต,เงินสด,ชำระผ่านธนาคาร
                </Tooltip>
              }
            >
              <Input placeholder='วิธีการชำระเงิน' value={distination} className='input-custom' />
            </Whisper>
          </Stack>
          <br />
          <Stack
            direction={'row'}
            divider={<Divider vertical />}
          >
            <span>รายละเอียด</span>
            <Input
              as='textarea'
              className='area-Custom'
              rows={8}
              value={description}
              placeholder='รายละเอียด'
            />
          </Stack>
        </Modal.Body>
        <br />
        <br />
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
            <div onClick={() => handleClear()}>
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
