/** @jsxImportSource @emotion/react */

// Emotion
import { css } from '@emotion/react'

// Global - Helpers
import { mqOnlyScreenMinAndMax } from '../../global/helpers/mq'

// Global - Styles
import { paddingFull5Rem } from '../../global/styles/air'
import { classBaseMaxWidth } from '../../global/styles/classNames'
import { flex } from '../../global/styles/general'

// Feature
import { Item } from './Item'

const mainStyle = css({
  display: flex,
  padding: paddingFull5Rem,
  minHeight: '60vh',
  [mqOnlyScreenMinAndMax[0]]: {
    padding: paddingFull5Rem,
  },
  [mqOnlyScreenMinAndMax[1]]: { padding: paddingFull5Rem },
})

export const Content = () => {
  return (
    <main css={mainStyle} className={classBaseMaxWidth}>
      <Item />
    </main>
  )
}
