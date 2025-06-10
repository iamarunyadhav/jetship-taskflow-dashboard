
import { useEffect } from "react";
import { useTaskStore } from "@/store/taskStore";
import { TaskTable } from "@/components/TaskTable";

export default function Tasks() {
  const { tasks, fetchTasks } = useTaskStore();

  useEffect(() => {
    fetchTasks(); // Loads tasks on first mount
  }, []);
  return <TaskTable />;
}
