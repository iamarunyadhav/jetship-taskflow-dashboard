import { create } from 'zustand';
import * as api from '@/services/api';
import { Task } from '@/types';

type State = {
  tasks: Task[];
  fetchTasks: () => Promise<void>;
  addTask: (data: Partial<Task>) => Promise<void>;
  updateTask: (id: number, data: Partial<Task>) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
};

export const useTaskStore = create<State>((set, get) => ({
  tasks: [],
  fetchTasks: async () => {
    const res = await api.getTasks();
    set({ tasks: res.data });
  },
  addTask: async (data) => {
    await api.createTask(data);
    await get().fetchTasks();
  },
  updateTask: async (id, data) => {
    await api.updateTask(id, data);
    await get().fetchTasks();
  },
  deleteTask: async (id) => {
    await api.deleteTask(id);
    await get().fetchTasks();
  },
}));
