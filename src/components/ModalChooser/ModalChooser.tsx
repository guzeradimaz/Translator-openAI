import React from 'react'
import './ModalChooser.styles.scss'
import { ILanguage, Languages } from '../../Constants/Constants'
import { IModalProps } from '../../types/Modal'

export const ModalChooser = ({
  setLanguage,
}: IModalProps) => {
  const handleChooseModal = (item: ILanguage) => {
    setLanguage(item)
  }
  return (
    <div className='modal'>
      {Languages.map(i => (
        <p key={i.id + Math.random()} onClick={() => handleChooseModal(i)}>
          {i.value}
        </p>
      ))}
    </div>
  )
}
