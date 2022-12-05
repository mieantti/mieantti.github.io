/** @jsxImportSource @emotion/react */

// Emotion
import { css } from '@emotion/react'

// React
import { FunctionComponent } from 'react'

// Strings
import CssId from '../../strings/CssId'

const itemStyles = css`
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

interface IItemProps {
  items: IItem[]
}

export interface IItem {
  effective: Date
  content: string
}

export const Item: FunctionComponent<IItemProps> = ({ items }) => {
  return (
    <section>
      {items.map((_: IItem, idx: number) => (
        <div css={itemStyles} key={new Date().valueOf() + idx}>
          <p id={CssId.ContentItemDate}>{_.effective.toLocaleDateString()}</p>
          <p>{_.content}</p>
        </div>
      ))}
    </section>
  )
}
