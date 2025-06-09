
import { create } from 'zustand';

export interface Theme {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    success: string;
    warning: string;
    error: string;
    info: string;
  };
}

export const themes: Theme[] = [
  {
    id: 'i4tglobal',
    name: 'i4TGlobal Blue-Green',
    colors: {
      primary: '59 130 246', // blue-500
      secondary: '16 185 129', // emerald-500
      accent: '14 165 233', // sky-500
      background: '248 250 252', // slate-50
      surface: '255 255 255', // white
      text: '15 23 42', // slate-900
      textSecondary: '71 85 105', // slate-600
      border: '226 232 240', // slate-200
      success: '34 197 94', // green-500
      warning: '251 146 60', // orange-400
      error: '239 68 68', // red-500
      info: '59 130 246', // blue-500
    }
  },
  {
    id: 'jetship',
    name: 'Jetship Purple',
    colors: {
      primary: '147 51 234', // violet-600
      secondary: '236 72 153', // pink-500
      accent: '168 85 247', // violet-500
      background: '248 250 252', // slate-50
      surface: '255 255 255', // white
      text: '15 23 42', // slate-900
      textSecondary: '71 85 105', // slate-600
      border: '226 232 240', // slate-200
      success: '34 197 94', // green-500
      warning: '251 146 60', // orange-400
      error: '239 68 68', // red-500
      info: '59 130 246', // blue-500
    }
  },
  {
    id: 'professional',
    name: 'Professional Blue',
    colors: {
      primary: '37 99 235', // blue-600
      secondary: '71 85 105', // slate-600
      accent: '59 130 246', // blue-500
      background: '248 250 252', // slate-50
      surface: '255 255 255', // white
      text: '15 23 42', // slate-900
      textSecondary: '71 85 105', // slate-600
      border: '226 232 240', // slate-200
      success: '34 197 94', // green-500
      warning: '245 158 11', // amber-500
      error: '239 68 68', // red-500
      info: '59 130 246', // blue-500
    }
  },
  {
    id: 'modern',
    name: 'Modern Teal',
    colors: {
      primary: '20 184 166', // teal-500
      secondary: '6 182 212', // cyan-500
      accent: '14 165 233', // sky-500
      background: '248 250 252', // slate-50
      surface: '255 255 255', // white
      text: '15 23 42', // slate-900
      textSecondary: '71 85 105', // slate-600
      border: '226 232 240', // slate-200
      success: '34 197 94', // green-500
      warning: '245 158 11', // amber-500
      error: '239 68 68', // red-500
      info: '59 130 246', // blue-500
    }
  },
  {
    id: 'elegant',
    name: 'Elegant Indigo',
    colors: {
      primary: '99 102 241', // indigo-500
      secondary: '139 92 246', // violet-500
      accent: '129 140 248', // indigo-400
      background: '248 250 252', // slate-50
      surface: '255 255 255', // white
      text: '15 23 42', // slate-900
      textSecondary: '71 85 105', // slate-600
      border: '226 232 240', // slate-200
      success: '34 197 94', // green-500
      warning: '245 158 11', // amber-500
      error: '239 68 68', // red-500
      info: '59 130 246', // blue-500
    }
  }
];

interface ThemeStore {
  currentTheme: Theme;
  setTheme: (themeId: string) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  currentTheme: themes[0], // Default to i4TGlobal theme
  setTheme: (themeId: string) => {
    const theme = themes.find(t => t.id === themeId) || themes[0];
    set({ currentTheme: theme });
    
    // Apply theme to CSS variables
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--theme-${key}`, value);
    });
  },
}));
