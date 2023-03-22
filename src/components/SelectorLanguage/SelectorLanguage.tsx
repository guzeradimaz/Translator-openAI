import React from 'react'
import { ILanguage } from '../../Constants/Constants'
import { ModalChooser } from '../ModalChooser/ModalChooser'

interface ISelectorProps {
  language: ILanguage
  selectLanguage: React.Dispatch<React.SetStateAction<boolean>>
  setLanguage: (state: ILanguage) => void
  isModal: boolean
}

export const SelectorLanguage = ({
  language,
  selectLanguage,
  setLanguage,
  isModal,
}: ISelectorProps) => {

  const handleSelectLanguage = () => {
    selectLanguage(prev => !prev)
  }

  return (
    <div className='translator__topbar_selector' onClick={handleSelectLanguage}>
      {isModal && <ModalChooser setLanguage={setLanguage} setIsModal={selectLanguage} />}
      {language ? language.value : 'Select language'}
    </div>
  )
}
