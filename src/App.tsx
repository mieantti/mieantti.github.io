// React
import { useCallback } from 'react'
import Particles from 'react-particles'

// tsparticles
import type { Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'
import { ISourceOptions } from 'tsparticles-engine'

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

const App = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <>
      <Global styles={globalStyles} />

      <Particles
        options={particlesOptions as ISourceOptions}
        init={particlesInit}
      />

      <Navigation />
      <Content />
      <Footer />
    </>
  )
}

export default App
