import React, { useState, useEffect } from 'react';
import { Container } from './components/Container';
import { TableArea, TableContent, TableColumnsPostos, TableColumnsCel } from './components/Table';
import { Api } from './services/api';
import {ModalContext} from './contexts/Modal';

function App() {

  const [ data, setData ]: any = useState();

  useEffect(()=>{
    async function getListContacts() {
      try {
        const {data} = await Api.get("https://3333-magenta-krill-c7fvp8ui.ws-us03.gitpod.io/todoscontatos")
        console.log(data)
        return setData(data)
      } catch (error) {
        alert("algum erro aconteceu!")
      }
    }
    getListContacts()
  },[])

  return (
    <>
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
              </TableContent>

              <TableContent>
                {/* { data.map((e:any)=>{
                  return (
                    <>
                    <TableColumnsPostos>
                      {e.postos}
                    </TableColumnsPostos>
                    <TableColumnsPostos>
                      {e.coordenadores}
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
                    </>
                  )
                }) } */}
              </TableContent>
          </TableArea>
      </Container>
      </ModalContext>
    </>
  );
}

export default App;