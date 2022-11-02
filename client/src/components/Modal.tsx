import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState, useRef } from 'react'
import { useActions } from './../hooks/useActions'


export const MyModal = () => {
  const [modal, setModal] = useState(true)
  const usernameRef = useRef<HTMLInputElement | null>(null)
  const {setUsername} = useActions()

  const connectionHandler = () => {
    setUsername(usernameRef.current?.value || "")
    setModal(false)
  }
  
  return <Modal show={modal} onHide={() => {}}>
  <Modal.Header closeButton>
    <Modal.Title>Введите ваше имя</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <input type="text" ref={usernameRef} />
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => connectionHandler()}>
      Войти
    </Button>
  </Modal.Footer>
</Modal>
}