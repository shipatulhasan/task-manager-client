import type { DraftTask } from '@/type'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

export const useTaskForm = ({ defaultValues, onSubmit }: {
  defaultValues?:DraftTask,onSubmit:(data:DraftTask)=>void
}) => {
  console.log(defaultValues)
  const formSchema = z.object({
    title: z
      .string()
      .min(5, 'Title must be at least 5 characters.')
      .max(32, 'Title must be at most 32 characters.'),
    description: z
      .string()
      .min(20, 'Description must be at least 20 characters.')
      .max(100, 'Description must be at most 100 characters.'),
    priority: z.enum(['low', 'medium', 'high'], {
      message: 'Priority must be low, medium or high'
    }),
    dueDate: z.date('Due date is required and must be a valid date.')
  })
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues
    })
  
  useEffect(() => {
   if(defaultValues)form.reset(defaultValues) 
  }, [defaultValues])
  
  const handleSubmit = (data: DraftTask) => {
    console.log(data)
    onSubmit(data)
  }
  return { form, handleSubmit }
  
}
