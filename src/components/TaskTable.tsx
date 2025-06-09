
import { useState } from "react";
import { Edit, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { TaskForm } from "./TaskForm";
import { useTaskStore } from "@/store/taskStore";
import { Task } from "@/types";
import { useToast } from "@/hooks/use-toast";

const statusColors = {
  pending: "warning",
  "in-progress": "info", 
  completed: "success"
};

const priorityColors = {
  low: "secondary",
  medium: "warning",
  high: "error"
};

export function TaskTable() {
  const { tasks, deleteTask } = useTaskStore();
  const { toast } = useToast();
  
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [deletingTask, setDeletingTask] = useState<Task | null>(null);

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setIsFormOpen(true);
  };

  const handleDelete = (task: Task) => {
    setDeletingTask(task);
  };

  const confirmDelete = () => {
    if (deletingTask) {
      deleteTask(deletingTask.id);
      toast({
        title: "Task deleted",
        description: "Task has been deleted successfully.",
        variant: "destructive"
      });
      setDeletingTask(null);
    }
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setEditingTask(null);
  };

  const getBadgeStyle = (type: 'status' | 'priority', value: string) => {
    const colorMap = type === 'status' ? statusColors : priorityColors;
    const colorKey = colorMap[value as keyof typeof colorMap];
    
    const colorVars = {
      success: 'var(--theme-success)',
      warning: 'var(--theme-warning)',
      error: 'var(--theme-error)',
      info: 'var(--theme-info)',
      secondary: 'var(--theme-text-secondary)'
    };
    
    return {
      backgroundColor: `rgb(${colorVars[colorKey as keyof typeof colorVars]})`,
      color: 'white'
    };
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[rgb(var(--theme-text))]">Tasks</h2>
        <Button 
          onClick={() => setIsFormOpen(true)} 
          className="bg-[rgb(var(--theme-primary))] text-white hover:bg-[rgb(var(--theme-primary))]/90"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Task
        </Button>
      </div>

      <div className="bg-[rgb(var(--theme-surface))] border border-[rgb(var(--theme-border))] rounded-lg overflow-hidden shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="border-[rgb(var(--theme-border))]">
              <TableHead className="text-[rgb(var(--theme-text))]">Title</TableHead>
              <TableHead className="text-[rgb(var(--theme-text))]">Due Date</TableHead>
              <TableHead className="text-[rgb(var(--theme-text))]">Status</TableHead>
              <TableHead className="text-[rgb(var(--theme-text))]">Priority</TableHead>
              <TableHead className="text-[rgb(var(--theme-text))]">Assigned To</TableHead>
              <TableHead className="text-[rgb(var(--theme-text))]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id} className="border-[rgb(var(--theme-border))]">
                <TableCell className="font-medium text-[rgb(var(--theme-text))]">{task.title}</TableCell>
                <TableCell className="text-[rgb(var(--theme-text))]">{task.dueDate}</TableCell>
                <TableCell>
                  <Badge style={getBadgeStyle('status', task.status)}>
                    {task.status.replace('-', ' ')}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge style={getBadgeStyle('priority', task.priority)}>
                    {task.priority}
                  </Badge>
                </TableCell>
                <TableCell className="text-[rgb(var(--theme-text))]">{task.assignedTo}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(task)}
                      className="hover:bg-[rgb(var(--theme-info))]/20 text-[rgb(var(--theme-info))]"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(task)}
                      className="hover:bg-[rgb(var(--theme-error))]/20 text-[rgb(var(--theme-error))]"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <TaskForm
        open={isFormOpen}
        onOpenChange={handleFormClose}
        task={editingTask}
      />

      <AlertDialog open={!!deletingTask} onOpenChange={() => setDeletingTask(null)}>
        <AlertDialogContent className="bg-[rgb(var(--theme-surface))] border border-[rgb(var(--theme-border))]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[rgb(var(--theme-text))]">Delete Task</AlertDialogTitle>
            <AlertDialogDescription className="text-[rgb(var(--theme-text-secondary))]">
              Are you sure you want to delete "{deletingTask?.title}"? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-[rgb(var(--theme-border))] text-[rgb(var(--theme-text))]">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDelete} 
              className="bg-[rgb(var(--theme-error))] text-white hover:bg-[rgb(var(--theme-error))]/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
