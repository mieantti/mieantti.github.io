/** @jsxImportSource @emotion/react */

// Emotion
import { css } from '@emotion/react'

// React
import { FunctionComponent } from 'react'

// Strings
import CssId from '../../../strings/CssId'

const workItemStyles = css`
  display: grid;
  line-height: 1.6;
  grid: 4rem / auto auto auto;
  grid-gap: 1rem;
  transition: 0.3s;

  :hover {
    color: #fff;
  }

  @media (prefers-color-scheme: dark) {
    :hover {
      color: #f5f5f5;
    }
  }

  @media only screen and (min-device-width: 350px) and (max-device-width: 915px) {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 2rem;
    grid-gap: 0.5rem;
  }

  p {
    margin: 0;
  }
`

interface IWorkItemProps {
  items: IWorkItem[]
}

export interface IWorkItem {
  effective: Date
  content: string
}

export const WorkItem: FunctionComponent<IWorkItemProps> = ({ items }) => {
  return (
    <section>
      {items.map((_: IWorkItem, idx: number) => (
        <div css={workItemStyles} key={new Date().valueOf() + idx}>
          <p id={CssId.WorkItemDate}>{_.effective.toLocaleDateString()}</p>
          <p>{_.content}</p>
        </div>
      ))}
    </section>
  )
}
