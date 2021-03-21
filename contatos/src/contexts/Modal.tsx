import React, { createContext, useState } from 'react'
import { IModalContexts } from './IModalContexts'

const ModalContexts = createContext( {} as IModalContexts )

export function ModalContext({ children }: any) {

  const [ OpenModal, setOpenModal ]: any = useState(false)
  const [ OpenModalEdit, setOpenModalEdit ]: any = useState(false)
  const [ IdEdit, setIdEdit ]: any = useState()

  return (
    <ModalContexts.Provider value={{ OpenModal, setOpenModal, IdEdit, setIdEdit, OpenModalEdit, setOpenModalEdit }}>
      {children}
    </ModalContexts.Provider>
  )
}
export default ModalContexts