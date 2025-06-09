
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
      <div className="glass-card border border-white/10 rounded-lg p-6 gradient-primary">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome back!</h1>
        <p className="text-white/80">Here's what's happening with your tasks today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
            <CheckSquare className="h-4 w-4 text-jetship-purple" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground">
              All tasks in the system
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-jetship-yellow" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pending}</div>
            <p className="text-xs text-muted-foreground">
              Tasks waiting to start
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Users className="h-4 w-4 text-jetship-blue" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.inProgress}</div>
            <p className="text-xs text-muted-foreground">
              Tasks being worked on
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <Calendar className="h-4 w-4 text-jetship-green" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completed}</div>
            <p className="text-xs text-muted-foreground">
              Tasks finished
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Recent Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <div className="space-y-1">
                  <p className="font-medium">{task.title}</p>
                  <p className="text-sm text-muted-foreground">Assigned to {task.assignedTo}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge 
                    className={
                      task.status === 'completed' ? 'bg-jetship-green text-white' :
                      task.status === 'in-progress' ? 'bg-jetship-blue text-white' :
                      'bg-jetship-yellow text-black'
                    }
                  >
                    {task.status.replace('-', ' ')}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{task.dueDate}</span>
                </div>
              </div>
            ))}
            {recentTasks.length === 0 && (
              <p className="text-center text-muted-foreground py-4">No tasks yet. Create your first task!</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
