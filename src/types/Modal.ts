import { ILanguage } from "../Constants/Constants"

export interface IModalProps {
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>
    setLanguage: (state: ILanguage) => void
  }
  