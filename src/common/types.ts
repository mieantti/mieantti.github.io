/** Type for configuration context that is used in root component (=App.tsx) */
export type ConfigurationContextType = {
  greetingMsg: string
  siteName: string
  socials: ISocialApp[]
}

export interface ISocialApp {
  id: number
  link: string
  name: string
  icon: JSX.Element
}
