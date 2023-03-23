import React from 'react'
import './ModalChooser.styles.scss'
import { ILanguage, Languages } from '../../Constants/Constants'
import { IModalProps } from '../../types/Modal'


export const ModalChooser = ({ setIsModal, setLanguage }: IModalProps) => {
  const handleChooseModal = (item: ILanguage) => {
    setLanguage(item)
    setIsModal(false)
  }
  return (
    <div className='modal'>
      {Languages.map(i => (
        <p key={i.id+Math.random()} onClick={() => handleChooseModal(i)}>
          {i.value}
        </p>
      ))}
    </div>
  )
}
