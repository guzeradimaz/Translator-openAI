import React, { useEffect, useState } from 'react'
import './Translator.styles.scss'
import { SelectorLanguage } from '../SelectorLanguage/SelectorLanguage'
import { ILanguage } from '../../Constants/Constants'

export const Translator = () => {
  const [fromLanguage, setFromLanguage] = useState<ILanguage>({
    id: 'ru',
    value: 'Russian',
  })
  const [toLanguage, setToLanguage] = useState<ILanguage>({
    id: 'en',
    value: 'English',
  })

  useEffect(()=>{
    console.log('from'+fromLanguage.id);
    console.log('to'+toLanguage.id);
    
  },[fromLanguage,toLanguage])
  
  const [isModal, setIsModal] = useState<boolean>(false)

  return (
    <div className='translator'>
      <div className='translator__topbar'>
        <SelectorLanguage
          language={fromLanguage}
          selectLanguage={setIsModal}
          setLanguage={setFromLanguage}
          isModal={isModal}
        />
        <div className='translator__topbar_switch'></div>
        <SelectorLanguage
          language={toLanguage}
          selectLanguage={setIsModal}
          setLanguage={setToLanguage}
          isModal={isModal}
        />
      </div>
      <div className='translator__fields'>
        <div className='translator__fields_field'></div>
        <div className='translator__fields_field'></div>
      </div>
    </div>
  )
}
