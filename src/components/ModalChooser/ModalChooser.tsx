import React from 'react'
import './ModalChooser.styles.scss'
import { ILanguage, Languages } from '../../Constants/Constants'

interface IModalProps {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>
  setLanguage: (state: ILanguage) => void
}

export const ModalChooser = ({ setIsModal, setLanguage }: IModalProps) => {
  const handleChooseModal = (item: ILanguage) => {
    setLanguage(item)
    setIsModal(prev => !prev)
  }
  return (
    <div className='modal'>
      {Languages.map(i => (
        <p onClick={() => handleChooseModal(i)}>{i.value}</p>
      ))}
    </div>
  )
}
