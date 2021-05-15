import React, { useState, useEffect, useContext } from 'react';
import { Container } from './components/Container';
import { TableArea, TableContent, TableColumnsPostos, TableColumnsCel } from './components/Table';
import { Api } from './services/api';
import ModalContexts, {ModalContext} from './contexts/Modal';
import { ModalEdit } from './components/ModalEdit';
import { Modal } from './components/Modal';
import { CommonButton } from './components/Button';

function App() {

  const { OpenModal, setOpenModal,setIdEdit, OpenModalEdit, setOpenModalEdit } = useContext(ModalContexts)
  const [ data, setData ]: any = useState();

  useEffect(()=>{
    async function getListContacts() {
      try {
        const {data} = await Api.get("/todoscontatos")

        return setData(data)
      } catch (error) {
        // alert(error.response.data.mensagem)
        console.log(`nenhum contato`)
      }
    }
    getListContacts()
  },[])

  return (
    <>
    { OpenModalEdit && <ModalEdit /> }
    { OpenModal && <Modal /> }
    <ModalContext>
      <Container>
          <TableArea>
              <TableContent>
                <TableColumnsPostos>
                  Postos
                </TableColumnsPostos>
                <TableColumnsPostos>
                  Coordenadores
                </TableColumnsPostos>

                <TableColumnsCel>
                  Tel1
                </TableColumnsCel>
                <TableColumnsCel>
                  Tel2
                </TableColumnsCel>

                <TableColumnsCel>
                  Cel1
                </TableColumnsCel>
                <TableColumnsCel>
                  Cel2
                </TableColumnsCel>
                <TableColumnsCel>
                  Edite um contato      
                </TableColumnsCel>
              </TableContent>

                { data && data.map((e:any)=>{
                  return (
                    <>
                  <TableContent>
                    <TableColumnsPostos>
                      {e.postos}
                    </TableColumnsPostos>
                    <TableColumnsPostos>
                      {e.coordenador}
                    </TableColumnsPostos>

                    <TableColumnsCel>
                      {e.tel1}
                    </TableColumnsCel>

                    <TableColumnsCel>
                      {e.tel2}
                    </TableColumnsCel>

                    <TableColumnsCel>
                      {e.cel1}
                    </TableColumnsCel>

                    <TableColumnsCel>
                      {e.cel2}
                    </TableColumnsCel>
                    <TableColumnsCel>
                      <CommonButton onClick={()=> { 
                        setOpenModalEdit(!OpenModalEdit)
                        setIdEdit(e.id) 
                      }}>
                        Editar
                      </CommonButton>
                    </TableColumnsCel>
              </TableContent>
                    </>
                  )
                }) }
                <CommonButton style={{ marginTop: "20px" }} onClick={ () => setOpenModal(!OpenModal) } >Adicionar um novo contato</CommonButton>
          </TableArea>
      </Container>
      </ModalContext>
    </>
  );
}

export default App;