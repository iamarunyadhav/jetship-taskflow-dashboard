
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthStore } from "@/store/authStore";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function TopNav() {
  const { user, logout } = useAuthStore();

  return (
    <header className="flex h-16 items-center justify-between border-b border-[rgb(var(--theme-border))] bg-[rgb(var(--theme-surface))]/80 backdrop-blur-xl px-6">
      <div className="flex items-center space-x-4 flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgb(var(--theme-text-secondary))]" />
          <Input
            placeholder="Search tasks, projects..."
            className="pl-10 bg-[rgb(var(--theme-background))] border-[rgb(var(--theme-border))] text-[rgb(var(--theme-text))]"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Theme Switcher */}
        <ThemeSwitcher />

        {/* Notifications */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative text-[rgb(var(--theme-text))] hover:bg-[rgb(var(--theme-primary))]/10"
        >
          <Bell className="h-5 w-5" />
          <span 
            className="absolute -top-1 -right-1 h-4 w-4 rounded-full text-[10px] font-medium text-white flex items-center justify-center"
            style={{ backgroundColor: `rgb(var(--theme-error))` }}
          >
            3
          </span>
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user?.avatar} alt={user?.name} />
                <AvatarFallback 
                  className="text-white"
                  style={{ backgroundColor: `rgb(var(--theme-primary))` }}
                >
                  {user?.name?.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="w-56 bg-[rgb(var(--theme-surface))] border border-[rgb(var(--theme-border))] shadow-lg" 
            align="end"
          >
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none text-[rgb(var(--theme-text))]">{user?.name}</p>
                <p className="text-xs leading-none text-[rgb(var(--theme-text-secondary))]">
                  {user?.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-[rgb(var(--theme-border))]" />
            <DropdownMenuItem className="text-[rgb(var(--theme-text))] hover:bg-[rgb(var(--theme-primary))]/10">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="text-[rgb(var(--theme-text))] hover:bg-[rgb(var(--theme-primary))]/10">
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[rgb(var(--theme-border))]" />
            <DropdownMenuItem 
              onClick={logout} 
              className="text-[rgb(var(--theme-error))] hover:bg-[rgb(var(--theme-error))]/10"
            >
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
