// React
import { useCallback } from 'react'
import Particles from 'react-particles'

// tsparticles
import type { Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'
import { ISourceOptions } from 'tsparticles-engine'

// Components
import { Navigation } from './components/navigation/Navigation'
import { Content } from './components/content/Content'
import { Footer } from './components/footer/Footer'

// Static
import './App.css'
import { particlesOptions } from './particles/particlesOptions'

const App = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <div className="app-root">
      <Particles
        options={particlesOptions as ISourceOptions}
        init={particlesInit}
      />
      <Navigation />
      <Content />
      <Footer />
    </div>
  )
}

export default App
