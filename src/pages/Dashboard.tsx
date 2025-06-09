
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTaskStore } from "@/store/taskStore";
import { CheckSquare, Clock, Users, Calendar } from "lucide-react";

export default function Dashboard() {
  const { tasks } = useTaskStore();
  
  const stats = {
    pending: tasks.filter(task => task.status === 'pending').length,
    completed: tasks.filter(task => task.status === 'completed').length,
    inProgress: tasks.filter(task => task.status === 'in-progress').length,
    total: tasks.length
  };

  const recentTasks = tasks.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div 
        className="rounded-lg p-6 text-white shadow-lg"
        style={{
          background: `linear-gradient(135deg, rgb(var(--theme-primary)), rgb(var(--theme-secondary)))`
        }}
      >
        <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
        <p className="text-white/90">Here's what's happening with your tasks today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card 
          className="shadow-sm border"
          style={{
            backgroundColor: `rgb(var(--theme-surface))`,
            borderColor: `rgb(var(--theme-border))`
          }}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[rgb(var(--theme-text))]">Total Tasks</CardTitle>
            <CheckSquare className="h-4 w-4" style={{ color: `rgb(var(--theme-primary))` }} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[rgb(var(--theme-text))]">{stats.total}</div>
            <p className="text-xs text-[rgb(var(--theme-text-secondary))]">
              All tasks in the system
            </p>
          </CardContent>
        </Card>

        <Card 
          className="shadow-sm border"
          style={{
            backgroundColor: `rgb(var(--theme-surface))`,
            borderColor: `rgb(var(--theme-border))`
          }}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[rgb(var(--theme-text))]">Pending</CardTitle>
            <Clock className="h-4 w-4" style={{ color: `rgb(var(--theme-warning))` }} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[rgb(var(--theme-text))]">{stats.pending}</div>
            <p className="text-xs text-[rgb(var(--theme-text-secondary))]">
              Tasks waiting to start
            </p>
          </CardContent>
        </Card>

        <Card 
          className="shadow-sm border"
          style={{
            backgroundColor: `rgb(var(--theme-surface))`,
            borderColor: `rgb(var(--theme-border))`
          }}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[rgb(var(--theme-text))]">In Progress</CardTitle>
            <Users className="h-4 w-4" style={{ color: `rgb(var(--theme-info))` }} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[rgb(var(--theme-text))]">{stats.inProgress}</div>
            <p className="text-xs text-[rgb(var(--theme-text-secondary))]">
              Tasks being worked on
            </p>
          </CardContent>
        </Card>

        <Card 
          className="shadow-sm border"
          style={{
            backgroundColor: `rgb(var(--theme-surface))`,
            borderColor: `rgb(var(--theme-border))`
          }}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[rgb(var(--theme-text))]">Completed</CardTitle>
            <Calendar className="h-4 w-4" style={{ color: `rgb(var(--theme-success))` }} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[rgb(var(--theme-text))]">{stats.completed}</div>
            <p className="text-xs text-[rgb(var(--theme-text-secondary))]">
              Tasks finished
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card 
        className="shadow-sm border"
        style={{
          backgroundColor: `rgb(var(--theme-surface))`,
          borderColor: `rgb(var(--theme-border))`
        }}
      >
        <CardHeader>
          <CardTitle className="text-[rgb(var(--theme-text))]">Recent Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTasks.map((task) => (
              <div 
                key={task.id} 
                className="flex items-center justify-between p-3 rounded-lg"
                style={{ backgroundColor: `rgba(var(--theme-primary), 0.05)` }}
              >
                <div className="space-y-1">
                  <p className="font-medium text-[rgb(var(--theme-text))]">{task.title}</p>
                  <p className="text-sm text-[rgb(var(--theme-text-secondary))]">Assigned to {task.assignedTo}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge 
                    className="text-white"
                    style={{
                      backgroundColor: task.status === 'completed' 
                        ? `rgb(var(--theme-success))` 
                        : task.status === 'in-progress' 
                        ? `rgb(var(--theme-info))` 
                        : `rgb(var(--theme-warning))`
                    }}
                  >
                    {task.status.replace('-', ' ')}
                  </Badge>
                  <span className="text-sm text-[rgb(var(--theme-text-secondary))]">{task.dueDate}</span>
                </div>
              </div>
            ))}
            {recentTasks.length === 0 && (
              <p className="text-center text-[rgb(var(--theme-text-secondary))] py-4">No tasks yet. Create your first task!</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
