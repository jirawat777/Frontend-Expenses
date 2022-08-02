import React, { useState } from 'react'
import {
  Modal,
  ButtonToolbar,
  Button,
  RadioGroup,
  Radio,
  Placeholder
} from 'rsuite'
import './index.scss'
const styles = {
  radioGroupLabel: {
    padding: '8px 12px',
    display: 'inline-block',
    verticalAlign: 'middle'
  }
}
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
      >
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Placeholder.Paragraph />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => close()} appearance='primary'>
            Ok
          </Button>
          <Button onClick={() => close()} appearance='subtle'>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CreateListExpenses
