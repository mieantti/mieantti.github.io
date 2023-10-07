/** @jsxImportSource @emotion/react */

// React
import { useContext } from 'react'

// Emotion
import { css } from '@emotion/react'
import {
  prefersLightColorSchemeMq,
  mqOnlyScreenMinAndMax,
} from '../../global/helpers/mq'

// Global - styles
import { classBaseMaxWidth } from '../../global/styles/classNames'
import { deepOrangeLight, deepOrangeLightish } from '../../global/styles/colors'
import { flex } from '../../global/styles/general'

// Context
import { ConfigurationContext } from '../../context/configurationContext'

const navigationStyle = css({
  display: flex,
  padding: '1rem 5rem 3rem 5rem',
})

const navigationSiteNameStyle = css({
  textDecoration: 'none',
  transition: '0.3s',
  '&:hover,&:focus': deepOrangeLightish,
  [prefersLightColorSchemeMq]: {
    '&:hover,&:focus': deepOrangeLight,
  },
  [mqOnlyScreenMinAndMax[0]]: {
    padding: '1rem 5rem 1rem 5rem',
  },
})

export const Navigation = () => {
  const { siteName } = useContext(ConfigurationContext)

  return (
    <header>
      <nav css={navigationStyle} className={classBaseMaxWidth}>
        <h1 style={{ width: '50rem' }}>
          <p css={navigationSiteNameStyle}>{siteName}</p>
        </h1>
      </nav>
    </header>
  )
}
