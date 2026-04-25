import type { RootState } from "@/redux/store";
import type { ITask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks:ITask[]
}
const  initialState:InitialState ={
  tasks: [{
    id: 1,
    title: "Design new landing page",
    description: "Create a modern and responsive landing page for the product launch. Include hero section, features, testimonials, and CTA.",
    status: "pending",
    priority: "high",
    dueDate: "2024-01-15",
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

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers:{}
})

export const selectTasks = (state:RootState)=>state.todo.tasks

export default tasksSlice.reducer 