import { ILanguage } from "../Constants/Constants"

export interface ISelectorProps {
    language: ILanguage
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>
    setLanguage: (state: ILanguage) => void
    isModal: boolean
  }