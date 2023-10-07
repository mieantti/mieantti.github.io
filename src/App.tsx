// React
import { useCallback } from 'react'
import Particles from 'react-particles'

// tsparticles
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

// Emotion
import { Global } from '@emotion/react'

// Components
import { Navigation } from './components/navigation/Navigation'
import { Content } from './components/content/Content'
import { Footer } from './components/footer/Footer'

// Static
import { particlesOptions } from './particles/particlesOptions'

// Global - Styles
import { globalStyles } from './global/styles/global-styles/globalStyles'

// Context
import { ConfigurationContext } from './context/configurationContext'
import { Icon } from './components/content/Icon'

// Icons
import { VscGithubInverted } from 'react-icons/vsc'
import { RxLinkedinLogo } from 'react-icons/rx'

const App = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const githubProfileLink = 'https://github.com/mieantti'
  const linkedInProfileLink = 'https://linkedin.com/in/mieantti'

  const ctx = {
    greetingMsg: 'Welcome',
    siteName: 'Antti Miettinen',
    socials: [
      {
        id: 1,
        link: githubProfileLink,
        name: 'GitHub',
        icon: (
          <Icon link={githubProfileLink} component={<VscGithubInverted />} />
        ),
      },
      {
        id: 2,
        link: linkedInProfileLink,
        name: 'LinkedIn',
        icon: (
          <Icon link={linkedInProfileLink} component={<RxLinkedinLogo />} />
        ),
      },
    ],
  }

  return (
    <>
      <Global styles={globalStyles} />

      <Particles init={particlesInit} options={particlesOptions} />

      <ConfigurationContext.Provider value={ctx}>
        <Navigation />
        <Content />
        <Footer />
      </ConfigurationContext.Provider>
    </>
  )
}

export default App
