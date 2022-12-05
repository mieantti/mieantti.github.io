export const particlesOptions = {
  fpsLimit: 120,
  particles: {
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'out',
      },
      random: true,
      speed: 0.1,
      straight: false,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
      value: { min: 0, max: 1 },
    },
    size: {
      random: true,
      value: { min: 1, max: 3 },
    },
    shape: { type: 'circle' },
    reduceDuplicates: true,
  },
  detectRetina: true,
}
