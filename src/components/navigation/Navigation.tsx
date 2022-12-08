/** @jsxImportSource @emotion/react */

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

// Strings
import Configuration from '../../strings/Configuration'

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
  return (
    <header>
      <nav css={navigationStyle} className={classBaseMaxWidth}>
        <h1 style={{ width: '50rem' }}>
          <p css={navigationSiteNameStyle}>{Configuration.SiteName}</p>
        </h1>
      </nav>
    </header>
  )
}
