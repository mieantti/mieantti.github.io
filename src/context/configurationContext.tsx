// React
import { createContext } from 'react'

// Common
import { ConfigurationContextType } from '../common/types'

export const ConfigurationContext = createContext<ConfigurationContextType>({
  greetingMsg: '',
  siteName: '',
  socials: [],
})
