/** @jsxImportSource @emotion/react */

// Emotion
import { css } from '@emotion/react'

// Strings
import CssClass from '../../strings/CssClass'

// Feature
import { IWorkItem, WorkItem } from './workItem/WorkItem'

const mainStyles = css`
  display: flex;
  padding: 5rem 5rem 5rem 5rem;
  min-height: 65vh;
  @media only screen and (min-device-width: 350px) and (max-device-width: 915px) {
    padding: 1rem 5rem 0 5rem;
  }
  @media only screen and (min-width: 600px) and (max-device-width: 1080px) {
    padding: 5rem 5rem 5rem 5rem;
  }
`

const items: IWorkItem[] = [
  {
    effective: new Date(),
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    effective: new Date(),
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    effective: new Date(),
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    effective: new Date(),
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    effective: new Date(),
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

export const Content = () => {
  return (
    <main css={mainStyles} className={CssClass.BaseMaxWidth}>
      <WorkItem items={items} />
    </main>
  )
}
