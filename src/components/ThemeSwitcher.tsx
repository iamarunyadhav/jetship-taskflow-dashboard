
import { useState } from 'react';
import { ChevronDown, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useThemeStore, themes } from '@/store/themeStore';

export function ThemeSwitcher() {
  const { currentTheme, setTheme } = useThemeStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 bg-[rgb(var(--theme-surface))] border border-[rgb(var(--theme-border))] text-[rgb(var(--theme-text))] hover:bg-[rgb(var(--theme-accent))]/10"
        >
          <Palette className="h-4 w-4" />
          <span className="hidden sm:inline">{currentTheme.name}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-48 bg-[rgb(var(--theme-surface))] border border-[rgb(var(--theme-border))] shadow-lg"
      >
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.id}
            onClick={() => setTheme(theme.id)}
            className={`
              cursor-pointer text-[rgb(var(--theme-text))] hover:bg-[rgb(var(--theme-primary))]/10
              ${currentTheme.id === theme.id ? 'bg-[rgb(var(--theme-primary))]/20' : ''}
            `}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full border border-[rgb(var(--theme-border))]"
                style={{
                  background: `linear-gradient(135deg, rgb(${theme.colors.primary}), rgb(${theme.colors.secondary}))`
                }}
              />
              <span>{theme.name}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
