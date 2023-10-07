/** @jsxImportSource @emotion/react */

// Emotion
import { css, keyframes } from '@emotion/react'

// React
import { FunctionComponent, useContext } from 'react'

// Global - Helpers
import {
  mqOnlyScreenMinAndMax,
  prefersLightColorSchemeMq,
} from '../../global/helpers/mq'

// Global - Styles
import {
  white,
  yellowishDark,
  yellowishLight,
} from '../../global/styles/colors'
import { flex } from '../../global/styles/general'

// Context
import { ConfigurationContext } from '../../context/configurationContext'

const itemRootStyle = css({
  lineHeight: '2',
  transition: '0.3s',
  [mqOnlyScreenMinAndMax[0]]: {
    display: flex,
    flexWrap: 'wrap',
  },
})

const socialsStyle = css({
  display: flex,
})

const iconStyle = css({
  paddingRight: '1em',
  paddingTop: '1.25em',
  margin: 0,
})

const hoverOrFocusH3 = css({
  '&:hover,&:focus': white,
})

const hoverOrFocusH4 = css({
  '&:hover,&:focus': yellowishDark,
  [prefersLightColorSchemeMq]: {
    '&:hover,&:focus': yellowishLight,
  },
})

const sparklesTxtChange = keyframes`
  0% { color: #84FFFF; }
  12.5% { color: #18FFFF; }
  25% { color: #FF80AB; }
  37.5% { color: #FF4081; }
  50% { color: #F50057; }
  67.5% { color: #FFFF00; }
  75% { color: #FFEA00; }
  87.5% { color: #FFD600; }
  100% { color: #E0F7FA; }
`

export const Item: FunctionComponent = () => {
  const { socials } = useContext(ConfigurationContext)

  return (
    <section>
      <div css={itemRootStyle}>
        <h3 css={hoverOrFocusH3}>
          <b>hello</b>, it's lovely to meet you. here are some{' '}
          <span
            css={css`
              animation: ${sparklesTxtChange} 5s linear infinite;
            `}
          >
            sparkles
          </span>{' '}
          for you ✨
        </h3>
        <h4 css={hoverOrFocusH4}>btw, I work as a software developer</h4>
      </div>
      <div css={socialsStyle}>
        {socials.map((_) => {
          return (
            <p key={_.id} css={iconStyle}>
              {_.icon}
            </p>
          )
        })}
      </div>
    </section>
  )
}
