/** @jsxImportSource @emotion/react */

// Emotion
import { css } from '@emotion/react'

// React
import { FunctionComponent } from 'react'

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

interface ISocial {
  link: string
  name: string
  icon: string
}

const social: Array<ISocial> = [
  {
    link: '#link',
    name: '#name',
    icon: '#icon',
  },
  {
    link: '#link',
    name: '#name',
    icon: '#icon',
  },
  {
    link: '#link',
    name: '#name',
    icon: '#icon',
  },
  {
    link: '#link',
    name: '#name',
    icon: '#icon',
  },
]

const itemRootStyle = css({
  lineHeight: '2',
  transition: '0.3s',
  [mqOnlyScreenMinAndMax[0]]: {
    display: flex,
    flexWrap: 'wrap',
  },
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

const socialsStyle = css({
  display: flex,
})

const iconStyle = css({
  paddingRight: '1em',
  paddingTop: '1.25em',
  margin: 0,
})

export const Item: FunctionComponent = () => {
  return (
    <section>
      <div css={itemRootStyle}>
        <h3 css={hoverOrFocusH3}>
          hello, it's lovely to meet you. here are some sparkles for you ✨
        </h3>
        <h4 css={hoverOrFocusH4}>I am a software developer</h4>
      </div>
      <div css={socialsStyle}>
        {social.map((_) => {
          return (
            <>
              <p css={iconStyle}>{_.icon}</p>
            </>
          )
        })}
      </div>
    </section>
  )
}
