
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
  Users,
  Palette
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
    title: "Elements",
    icon: Palette,
    href: "/elements"
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
    <div className="flex h-full w-64 flex-col bg-[rgb(var(--theme-surface))] border-r border-[rgb(var(--theme-border))] shadow-lg">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-[rgb(var(--theme-border))] px-6">
        <div className="flex items-center space-x-2">
          <div 
            className="h-8 w-8 rounded-lg flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, rgb(var(--theme-primary)), rgb(var(--theme-secondary)))`
            }}
          >
            <CheckSquare className="h-5 w-5 text-white" />
          </div>
          <span 
            className="text-xl font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, rgb(var(--theme-primary)), rgb(var(--theme-secondary)))`
            }}
          >
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
                variant="ghost"
                className={cn(
                  "w-full justify-start h-12 px-4 text-[rgb(var(--theme-text))] hover:bg-[rgb(var(--theme-primary))]/10",
                  isActive && "bg-[rgb(var(--theme-primary))] text-white hover:bg-[rgb(var(--theme-primary))]/90"
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
      <div className="border-t border-[rgb(var(--theme-border))] p-4">
        <Button
          variant="ghost"
          className="w-full justify-start h-12 px-4 text-[rgb(var(--theme-error))] hover:text-[rgb(var(--theme-error))] hover:bg-[rgb(var(--theme-error))]/10"
          onClick={logout}
        >
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  );
}
