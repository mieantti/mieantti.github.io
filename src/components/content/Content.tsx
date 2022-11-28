// Strings
import CssClass from '../../strings/CssClass'

// Feature
import { IWorkItem, WorkItem } from './workItem/WorkItem'

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
    <main className={CssClass.BaseMaxWidth}>
      <WorkItem items={items} />
    </main>
  )
}
