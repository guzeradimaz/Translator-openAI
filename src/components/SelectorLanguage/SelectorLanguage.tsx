import React from 'react'
import { ISelectorProps } from '../../types/Selector'
import { ModalChooser } from '../ModalChooser/ModalChooser'


export const SelectorLanguage = ({
  language,
  setIsModal,
  setLanguage,
  isModal,
}: ISelectorProps) => {

  const handleSelectLanguage = () => {
    setIsModal(prev => !prev)
  }

  return (
    <div className='translator__topbar_selector' onClick={handleSelectLanguage}>
      {isModal && <ModalChooser setLanguage={setLanguage}/>}
      {language ? language.value : 'Select language'}
    </div>
  )
}
