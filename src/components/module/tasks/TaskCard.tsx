
import { cn } from "@/lib/utils";
import type { ITask } from "@/type";
import { CheckSquare, Clock, MessageSquare, MoreHorizontal, Paperclip } from "lucide-react";

interface TaskCardProps {
  task: ITask;
}

export default function TaskCard({ task }: TaskCardProps) {
  const isOverdue = new Date(task.dueDate) < new Date() && !task.isCompleted;
  const totalChecklistItems = task.checklists?.reduce((acc, checklist) => acc + checklist.items.length, 0) || 0;
  const completedChecklistItems = task.checklists?.reduce((acc, checklist) => acc + checklist.items.filter(item => item.completed).length, 0) || 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 cursor-pointer hover:shadow-lg transition-shadow min-h-[120px] flex flex-col">
      {/* Cover */}
      {task.cover && (
        <div
          className={`w-full h-20 rounded-t-lg mb-3 ${task.cover.type === 'color' ? '' : 'bg-cover bg-center'}`}
          style={task.cover.type === 'color' ? { backgroundColor: task.cover.value } : { backgroundImage: `url(${task.cover.value})` }}
        />
      )}

      {/* Labels */}
      {task.labels && task.labels.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {task.labels.map((label, index) => (
            <span key={index} className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
              {label}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white line-clamp-2">
        {task.title}
      </h2>

      {/* Description */}
      {task.description && (
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">
          {task.description}
        </p>
      )}

      {/* Badges */}
      <div className="flex items-center gap-2 mb-3">
        {/* Due Date */}
        {task.dueDate && (
          <div className={`flex items-center gap-1 text-xs ${isOverdue ? 'text-red-500' : 'text-gray-500'}`}>
            <Clock size={12} />
            <span>{new Date(task.dueDate).toLocaleDateString()}</span>
          </div>
        )}

        {/* Attachments */}
        {task.attachments && task.attachments > 0 && (
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Paperclip size={12} />
            <span>{task.attachments}</span>
          </div>
        )}

        {/* Comments */}
        {task.comments && task.comments > 0 && (
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <MessageSquare size={12} />
            <span>{task.comments}</span>
          </div>
        )}

        {/* Checklist Progress */}
        {totalChecklistItems > 0 && (
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <CheckSquare size={12} />
            <span>{completedChecklistItems}/{totalChecklistItems}</span>
          </div>
        )}
      </div>

      {/* Members */}
      {task.members && task.members.length > 0 && (
        <div className="flex items-center gap-1 mb-3">
          {task.members.slice(0, 3).map((member, index) => (
            <div key={index} className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
              {member.charAt(0).toUpperCase()}
            </div>
          ))}
          {task.members.length > 3 && (
            <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-600">
              +{task.members.length - 3}
            </div>
          )}
        </div>
      )}

      {/* Priority Badge */}
      <div className="flex items-center justify-between">

        <span className={cn("text-xs px-2 py-1 rounded", {
          'bg-red-100 text-red-800' : task.priority === 'high',
          'bg-yellow-100 text-yellow-800' : task.priority === 'medium',
          'bg-green-100 text-green-800' : task.priority === 'low'
        } )}>
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
        </span>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>
  );
}