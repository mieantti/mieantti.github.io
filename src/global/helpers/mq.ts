interface IBreakpoint {
  min: number
  max: number
}

const breakpoints: Array<IBreakpoint> = [
  {
    min: 350,
    max: 915,
  },
  {
    min: 600,
    max: 1080,
  },
]

export const mqOnlyScreenMinAndMax = breakpoints.map(
  (_) =>
    `@media only screen and (min-device-width: ${_.min}) and (max-device-width: ${_.max})`
)

export const prefersLightColorSchemeMq: string =
  '@media (prefers-color-scheme: light)'
