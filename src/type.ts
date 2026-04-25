export interface ITask {
    id: number
  title: string
  description: string
  status: string
  priority: "high"|"medium"|"low"
  dueDate: string
  isCompleted: boolean
  labels?: string[]
  members?: string[]
  attachments?: number
  comments?: number
  checklists?: {title: string, items: {text: string, completed: boolean}[]}[]
  cover?: {type: 'color' | 'image', value: string}
  createdAt?: string
  updatedAt?: string
}