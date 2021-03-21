import styled from 'styled-components'
import ModalContexts from '../contexts/Modal'
import { FormEvent, useContext, useRef } from 'react'
import { CommonButton } from './Button'
import { Api } from '../services/api'

const Container = styled.div`
  background: gray;
  color: white;
  width: 100%;
  height: 100vh;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 80vh;
  justify-content: center;
  align-items: center;
`

const InputBlocks = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  input {
    border: none;
    width: 100%;
    height: 40px;
    padding: 5px;
    outline: none;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  span {
    font-size: 18px;
    color: black;
  }
`

function Modal() {

  const { setOpenModal, OpenModal } = useContext(ModalContexts)

  // Refs
  const PostoRef: any = useRef().current
  const CoordRef: any = useRef().current
  const tel1Ref: any = useRef().current
  const tel2Ref: any = useRef().current
  const cel1Ref: any = useRef().current
  const cel2Ref: any = useRef().current

  const Submit = async (evt: FormEvent) => {
    
   const {data} = await Api.post("/criarcontato", {
      posto: PostoRef?.value,
      coordenador: CoordRef?.value,
      tel1: tel1Ref.value,
      tel2: tel2Ref.value,
      cel1: cel1Ref.value,
      cel2: cel2Ref.value
    })

    console.log(data.mensagem)

  }


  return (
    <Container style={{ zIndex: 999 }}>
      <button onClick={ () => setOpenModal(!OpenModal) } >Fechar Modal</button>

      <div>
        <h1>Adicionar novo contato</h1>

        <Form onSubmit={Submit}>
          <InputBlocks>
          <span>Posto SAC</span>
          <input type="text" ref={PostoRef}/>
          </InputBlocks>
          <InputBlocks>
          <span>Coordenador</span>
          <input type="text" ref={CoordRef} />
          </InputBlocks>
          <InputBlocks>
          <span>Telefone 1</span>
          <input type="text" ref={tel1Ref} />
          </InputBlocks>
          <InputBlocks>
          <span>Telefone 2</span>
          <input type="text" ref={tel2Ref} />
          </InputBlocks>
          <InputBlocks>
          <span>Celular 1</span>
          <input type="text" ref={cel1Ref}/>
          </InputBlocks>
          <InputBlocks>
          <span>Celular 2</span>
          <input type="text" ref={cel2Ref}/>
          </InputBlocks>
          <CommonButton>Salvar</CommonButton>
        </Form>

      </div>

    </Container>
  )
}

export { Modal }