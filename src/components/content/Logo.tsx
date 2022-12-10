// React
import { FunctionComponent, useEffect, useState } from 'react'

// react-icons
import { IconContext } from 'react-icons'
import {
  deepOrangeLightishValue,
  deepOrangeLightValue,
  lightPink,
  purpleLightishValue,
  purpleLightValue,
  yellowishLightValue,
  yellowishValue,
} from '../../global/styles/colorValues'

interface IIconProps {
  link: string
  component: JSX.Element
}

enum ColorScheme {
  Dark = 'dark',
  Light = 'light',
}

const iconColorsDark: string[] = [
  yellowishValue,
  purpleLightishValue,
  deepOrangeLightishValue,
  lightPink,
]
const iconColorsLight: string[] = [
  yellowishLightValue,
  purpleLightValue,
  deepOrangeLightValue,
  lightPink,
]

export const Icon: FunctionComponent<IIconProps> = ({ link, component }) => {
  const [preferredColorScheme, setPreferredColorScheme] = useState<ColorScheme>(
    ColorScheme.Dark
  )

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const colorScheme = event.matches ? 'dark' : 'light'
        setPreferredColorScheme(
          colorScheme === 'dark' ? ColorScheme.Dark : ColorScheme.Light
        )
      })
  }, [])

  const getIconColors = () => {
    return preferredColorScheme === ColorScheme.Dark
      ? iconColorsDark[Math.floor(Math.random() * iconColorsDark.length)]
      : iconColorsLight[Math.floor(Math.random() * iconColorsLight.length)]
  }

  const iconCtx: IconContext = {
    color: getIconColors(),
    size: '2.5em',
  }

  return (
    <>
      <IconContext.Provider value={iconCtx}>
        <a href={link} tabIndex={-1}>
          {component}
        </a>
      </IconContext.Provider>
    </>
  )
}
