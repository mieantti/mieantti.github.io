import { ISourceOptions } from 'tsparticles-engine'

export const particlesOptions: ISourceOptions = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 5,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'out',
      },
      random: true,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
      value: { min: 0, max: 1 },
    },
    shape: {
      type: 'circle',
    },
    reduceDuplicates: true,
    size: {
      random: true,
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
}
