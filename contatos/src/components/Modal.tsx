import styled from 'styled-components'
import ModalContexts from '../contexts/Modal'
import { useContext } from 'react'

const Container = styled.div`
  background: black;
  color: white;
  width: 100%;
  height: 100vh;
`

function Modal() {

  const { setOpenModal } = useContext(ModalContexts)

  return (
    <Container>
      <button>Fechar Modal</button>
    </Container>
  )
}

export { Modal }