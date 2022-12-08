/** @jsxImportSource @emotion/react */

// Emotion
import { css } from '@emotion/react'

// Global - Helpers
import { prefersLightColorSchemeMq } from '../../global/helpers/mq'

// Global - Styles
import { paddingFull3Rem } from '../../global/styles/air'
import { classBaseMaxWidth } from '../../global/styles/classNames'
import { purpleLightish, purpleLight } from '../../global/styles/colors'

// Strings
import Configuration from '../../strings/Configuration'

const footerStyle = css({
  padding: paddingFull3Rem,
  transition: '0.3s',
})

const paragraphHoverFocusActive = css({
  '&:hover,&:focus': purpleLightish,
  [prefersLightColorSchemeMq]: {
    '&:hover,&:focus': purpleLight,
  },
})

const footerYearAndName = ` ${new Date().getUTCFullYear()} ${
  Configuration.SiteName
}`

export const Footer = () => {
  return (
    <footer>
      <div css={footerStyle} className={classBaseMaxWidth}>
        <p css={paragraphHoverFocusActive}>©️{footerYearAndName}</p>
      </div>
    </footer>
  )
}
