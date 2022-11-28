// React
import { FunctionComponent } from 'react'

// Strings
import CssClass from '../../../strings/CssClass'
import CssId from '../../../strings/CssId'

import './WorkItem.css'

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
      {items.map((_: IWorkItem) => (
        <div className={CssClass.WorkItem}>
          <p id={CssId.WorkItemDate}>{_.effective.toLocaleDateString()}</p>
          <p id={CssId.WorkItemContent}>{_.content}</p>
        </div>
      ))}
    </section>
  )
}
