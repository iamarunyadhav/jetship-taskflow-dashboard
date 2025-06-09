
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuthStore } from "@/store/authStore";
import { 
  Calendar,
  Home,
  Settings,
  User,
  LogOut,
  CheckSquare,
  Users
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/dashboard"
  },
  {
    title: "Tasks",
    icon: CheckSquare,
    href: "/tasks"
  },
  {
    title: "Projects",
    icon: Calendar,
    href: "/projects"
  },
  {
    title: "Team",
    icon: Users,
    href: "/team"
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings"
  }
];

export function Sidebar() {
  const location = useLocation();
  const { logout } = useAuthStore();

  return (
    <div className="flex h-full w-64 flex-col glass-card border-r border-white/10">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-white/10 px-6">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
            <CheckSquare className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            TaskFlow
          </span>
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3 py-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Button
                key={item.href}
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start h-12 px-4",
                  isActive && "gradient-primary text-white hover:text-white"
                )}
                asChild
              >
                <Link to={item.href}>
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.title}
                </Link>
              </Button>
            );
          })}
        </div>
      </ScrollArea>

      {/* User Profile & Logout */}
      <div className="border-t border-white/10 p-4">
        <Button
          variant="ghost"
          className="w-full justify-start h-12 px-4 text-red-400 hover:text-red-300 hover:bg-red-500/10"
          onClick={logout}
        >
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  );
}
