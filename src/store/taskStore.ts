
import { create } from 'zustand';
import { TaskState, Task } from '../types';

// Mock data
const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Design landing page',
    description: 'Create wireframes and mockups for the new landing page',
    dueDate: '2024-06-15',
    status: 'in-progress',
    assignedTo: 'Alice Johnson',
    priority: 'high',
    createdAt: '2024-06-01'
  },
  {
    id: '2',
    title: 'Implement user authentication',
    description: 'Set up login/register functionality with JWT',
    dueDate: '2024-06-20',
    status: 'pending',
    assignedTo: 'Bob Smith',
    priority: 'medium',
    createdAt: '2024-06-02'
  },
  {
    id: '3',
    title: 'Write API documentation',
    description: 'Document all endpoints for the REST API',
    dueDate: '2024-06-10',
    status: 'completed',
    assignedTo: 'Carol Davis',
    priority: 'low',
    createdAt: '2024-05-25'
  }
];

export const useTaskStore = create<TaskState>((set) => ({
  tasks: mockTasks,
  
  addTask: (task) => set((state) => ({
    tasks: [...state.tasks, {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0]
    }]
  })),
  
  updateTask: (id, updatedTask) => set((state) => ({
    tasks: state.tasks.map(task => 
      task.id === id ? { ...task, ...updatedTask } : task
    )
  })),
  
  deleteTask: (id) => set((state) => ({
    tasks: state.tasks.filter(task => task.id !== id)
  }))
}));
