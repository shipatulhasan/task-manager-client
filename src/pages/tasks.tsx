
import { AddTaskModal } from "@/components/module/tasks/AddTaskModal"
import TaskCardMini from "@/components/module/tasks/TaskCardMini"
import { selectTasks } from "@/redux/features/tasks/taskSlice"
import { useAppSelecotor } from "@/redux/hook"

const Tasks = () => {
  const tasks = useAppSelecotor(selectTasks)
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6 pb-4 relative">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <AddTaskModal />
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-500 to-gray-500"></div>
            </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {
        tasks.map(task=><TaskCardMini key={task.id} task={task} />)
      }
</div>
    </div>
  )
}
export default Tasks