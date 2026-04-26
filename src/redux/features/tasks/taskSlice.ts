import type { RootState } from "@/redux/store";
import type { ITask } from "@/type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid4 } from "uuid";

interface InitialState {
  tasks:ITask[]
}
const  initialState:InitialState ={
  tasks: [{
    id: 'adfwoo',
    title: "Design new landing page",
    description: "Create a modern and responsive landing page for the product launch. Include hero section, features, testimonials, and CTA.",
    status: "pending",
    priority: "high",
    dueDate: new Date("2024-01-15"),
    isCompleted: false,
    labels: ["Design", "Frontend"],
    members: ["Alice", "Bob"],
    attachments: 3,
    comments: 5,
    checklists: [
      {
        title: "Design Phase",
        items: [
          { text: "Wireframe creation", completed: true },
          { text: "Mockup design", completed: false },
          { text: "Client review", completed: false }
        ]
      }
    ],
    cover: { type: "color", value: "#4A90E2" },
    createdAt: "2023-12-01",
    updatedAt: "2023-12-10"
  }]
}
type DraftTask = Pick<ITask, 'title' | 'description' | 'priority' | 'dueDate'>
const crateTask = (taskData: DraftTask): ITask => {
        const id = uuid4()
      return {
        ...taskData,
        id,
        status: "pending",
        isCompleted: false,
      }
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action:PayloadAction<DraftTask>) => {
      const newTask = crateTask(action.payload)
      state.tasks.push(newTask)
    }
  }
})
export const {addTask}= tasksSlice.actions
export const selectTasks = (state:RootState)=>state.todo.tasks

export default tasksSlice.reducer 