import React from 'react'
import { IFieldProps } from '../../types/Field'

export const FieldToTranslate = ({ value, setValue }: IFieldProps) => {
  const handleChangePrompt = (e: { target: { value: string } }) => {
    setValue(e.target.value)
  }
  return (
    <>
      <textarea
        value={value}
        onChange={handleChangePrompt}
        name='field'
        id='field'></textarea>
    </>
  )
}
