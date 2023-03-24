export interface ILanguage {
  id: string
  value: string
}
export interface ITranslatorProps {
  from: string
  to: string
  txt: string
}

export const Languages: ILanguage[] = [
  {
    id: 'ru',
    value: 'Russian',
  },
  {
    id: 'en',
    value: 'English',
  },
  {
    id: 'bg',
    value: 'Bulgarian',
  },
  {
    id: 'hu',
    value: 'Hungarian',
  },
  {
    id: 'el',
    value: 'Greek',
  },
  {
    id: 'da',
    value: 'Danish',
  },
  {
    id: 'he',
    value: 'Hebrew',
  },
  {
    id: 'is',
    value: 'Icelandic',
  },
  {
    id: 'es-ES',
    value: 'Spanish',
  },
  {
    id: 'it',
    value: 'Italian',
  },
  {
    id: 'zh-HK',
    value: 'Chinese (Hong Kong)',
  },
  {
    id: 'zh-TW',
    value: 'Chinese (Taiwan)',
  },
  {
    id: 'ko',
    value: 'Korean',
  },
  {
    id: 'lt',
    value: 'Lithuanian',
  },
  {
    id: 'de',
    value: 'German',
  },
  {
    id: 'pl',
    value: 'Polish',
  },
  {
    id: 'ro',
    value: 'Romanian',
  },
  {
    id: 'fr-FR',
    value: 'French',
  },
  
]
