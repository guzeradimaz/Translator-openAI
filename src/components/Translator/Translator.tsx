import React, { useEffect, useState } from 'react'
import './Translator.styles.scss'
import { SelectorLanguage } from '../SelectorLanguage/SelectorLanguage'
import { ILanguage, ITranslatorProps } from '../../Constants/Constants'
import { FieldToTranslate } from '../FieldToTranslate/FieldToTranslate'
import axios from 'axios'

const googleTranslateURL = ({ from, to, txt }: ITranslatorProps) =>
  `https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=${from}&tl=${to}&q=${txt}`

export const Translator = () => {
  const [fromLanguage, setFromLanguage] = useState<ILanguage>({
    id: 'ru',
    value: 'Russian',
  })
  const [toLanguage, setToLanguage] = useState<ILanguage>({
    id: 'en',
    value: 'English',
  })

  const [prompt, setPromt] = useState<string>('')
  const [translated, setTranslated] = useState<string>('')

  const [isModalFrom, setIsModalFrom] = useState<boolean>(false)
  const [isModalTo, setIsModalTo] = useState<boolean>(false)

  const translate = async () => {
    if (prompt) {
      const newPrompt: ITranslatorProps = {
        from: fromLanguage.id,
        to: toLanguage.id,
        txt: encodeURI(prompt.replace(/\n/g, ' ').replace(/ {2}/g, ' ')),
      }
      const url = googleTranslateURL(newPrompt)
      let response
      try {
        response = await axios(url)
      } catch (error) {
        console.error(error)
      }
      //@ts-ignore
      setTranslated(response.data[0][0][0])
    }
  }

  useEffect(() => {
    translate()
  }, [prompt])

  return (
    <div className='translator'>
      <div className='translator__topbar'>
        <SelectorLanguage
          key={'firstSelector'}
          setLanguage={setFromLanguage}
          language={fromLanguage}
          setIsModal={setIsModalFrom}
          isModal={isModalFrom}
        />
        <div className='translator__topbar_switch'></div>
        <SelectorLanguage
          key={'secondSelector'}
          setLanguage={setToLanguage}
          language={toLanguage}
          setIsModal={setIsModalTo}
          isModal={isModalTo}
        />
      </div>
      <div className='translator__fields'>
        <div className='translator__fields_field'>
          <FieldToTranslate value={prompt} setValue={setPromt} />
        </div>
        <div className='translator__fields_field'>
          <textarea value={translated}></textarea>
        </div>
      </div>
    </div>
  )
}
