import { CommonDialog } from '@/components/shared/CommonDialog'
import { Button } from '@/components/ui/button'
import { createTask } from '@/redux/features/tasks/taskSlice'
import { useAppDispatch } from '@/redux/hook'
import type { DraftTask, ITask } from '@/type'
import { useState } from 'react'

export function AddTaskModal() {
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()


  return (
    <>
      <Button onClick={()=>setOpen(true)} className='bg-green-700 text-gray-100 cursor-pointer ml-auto'>
        Create Task
      </Button>

      <CommonDialog
        open={open}
        onOpenChange={setOpen}
        mode={'create'}
        defaultValues={{
          title: '',
          description: '',
          priority: 'low',
          dueDate: new Date()
        }}
        onSubmit={(data: DraftTask) => {
          dispatch(createTask(data))
          setOpen(false)
        }}
      />
    </>
  )
}
