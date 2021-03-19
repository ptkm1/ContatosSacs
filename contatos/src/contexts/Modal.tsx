import React, { createContext, useState } from 'react'
import { IModalContexts } from './IModalContexts'

const ModalContexts = createContext( {} as IModalContexts )

export function ModalContext({ children }: any) {

  const [ OpenModal, setOpenModal ]: any = useState()

  return (
    <ModalContexts.Provider value={{ OpenModal, setOpenModal }}>
      {children}
    </ModalContexts.Provider>
  )
}
export default ModalContexts