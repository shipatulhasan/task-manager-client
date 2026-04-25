import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils";
import type { ITask } from "@/type"
import { Trash2 } from "lucide-react"

interface IProps{
  task: ITask
}

// const getPriorityShadowColor = (priority: string) => {
//   switch(priority) {
//     case 'high':
//       return 'shadow-red-500/50';
//     case 'medium':
//       return 'shadow-yellow-500/50';
//     case 'low':
//       return 'shadow-green-500/50';
//     default:
//       return 'shadow-blue-500/50';
//   }
// };

export default function TaskCardMini({task}:IProps) {
  // const priorityColor = getPriorityShadowColor(task.priority);
  
  return (
    <div className="border border-gray-600 rounded-lg p-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div
            className={cn("size-2 rounded-full animate-pulse transition-all duration-500", {
              'bg-red-500 shadow-lg shadow-red-400' : task.priority === 'high',
              'bg-yellow-500 shadow-lg shadow-yellow-400' : task.priority === 'medium',
              'bg-green-500 shadow-lg shadow-green-400' : task.priority === 'low'
            })}
          />
          <h2 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600">
            {task.title}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <Trash2 size={18} className="text-gray-400 hover:text-red-500 cursor-pointer transition-colors duration-200" />
          <Checkbox />
        </div>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        {task.description}
      </p>
    </div>
  )
}