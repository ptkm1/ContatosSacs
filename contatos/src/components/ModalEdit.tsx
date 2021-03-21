import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import ModalContexts from '../contexts/Modal'
import { Api } from '../services/api'
import { CommonButton } from './Button'

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


function ModalEdit() {

  const [ dados, setDados ]: any = useState()
  const { IdEdit, OpenModalEdit, setOpenModalEdit } = useContext(ModalContexts)

  useEffect(()=>{

    async function getDados() {
      const {data} = await Api.get(`/listarporid/${IdEdit}`)
      setDados(data[0])
    }
    getDados()
    // eslint-disable-next-line
  },[])

  return (
    <Container>
     <div>
     <button onClick={ () => setOpenModalEdit(!OpenModalEdit) } >Fechar Modal</button>
        <h1>Editar contato</h1>

        { dados && 
        <Form>
          <InputBlocks>
          <span>Posto SAC</span>
          <input type="text" value={dados.postos}/>
          </InputBlocks>
          <InputBlocks>
          <span>Coordenador</span>
          <input type="text" value={dados.coordenador} />
          </InputBlocks>
          <InputBlocks>
          <span>Telefone 1</span>
          <input type="text" value={dados.tel1} />
          </InputBlocks>
          <InputBlocks>
          <span>Telefone 2</span>
          <input type="text" value={dados.tel2} />
          </InputBlocks>
          <InputBlocks>
          <span>Celular 1</span>
          <input type="text" value={dados.cel1} />
          </InputBlocks>
          <InputBlocks>
          <span>Celular 2</span>
          <input type="text" value={dados.cel2} />
          </InputBlocks>
          <CommonButton>Salvar</CommonButton>
        </Form> }

      </div>
    </Container>
  )
}

export { ModalEdit }