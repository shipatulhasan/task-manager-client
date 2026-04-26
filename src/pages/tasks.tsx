
import { AddTaskModal } from "@/components/module/tasks/AddTaskModal"
import TaskCardMini from "@/components/module/tasks/TaskCardMini"
import { selectTasks } from "@/redux/features/tasks/taskSlice"
import { useAppSelecotor } from "@/redux/hook"

const Tasks = () => {
  const tasks = useAppSelecotor(selectTasks)
  console.log(tasks)
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <AddTaskModal/>
      </div>
      {
        tasks.map(task=><TaskCardMini key={task.id} task={task} />)
      }

    </div>
  )
}
export default Tasks