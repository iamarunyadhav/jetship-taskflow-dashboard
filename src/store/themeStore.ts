
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
      background: '15 15 23', // dark
      surface: '30 30 46', // dark surface
      text: '248 250 252', // light text
      textSecondary: '148 163 184', // slate-400
      border: '51 65 85', // slate-700
      success: '34 197 94', // green-500
      warning: '251 146 60', // orange-400
      error: '239 68 68', // red-500
      info: '59 130 246', // blue-500
    }
  },
  {
    id: 'classic',
    name: 'Classic Light',
    colors: {
      primary: '99 102 241', // indigo-500
      secondary: '107 114 128', // gray-500
      accent: '139 92 246', // violet-500
      background: '249 250 251', // gray-50
      surface: '255 255 255', // white
      text: '17 24 39', // gray-900
      textSecondary: '75 85 99', // gray-600
      border: '229 231 235', // gray-200
      success: '34 197 94', // green-500
      warning: '245 158 11', // amber-500
      error: '239 68 68', // red-500
      info: '59 130 246', // blue-500
    }
  },
  {
    id: 'warm',
    name: 'Warm Orange',
    colors: {
      primary: '234 88 12', // orange-600
      secondary: '251 146 60', // orange-400
      accent: '249 115 22', // orange-500
      background: '255 251 235', // amber-50
      surface: '255 255 255', // white
      text: '124 45 18', // orange-900
      textSecondary: '154 52 18', // orange-800
      border: '254 215 170', // orange-200
      success: '34 197 94', // green-500
      warning: '245 158 11', // amber-500
      error: '239 68 68', // red-500
      info: '59 130 246', // blue-500,
    }
  },
  {
    id: 'navy',
    name: 'Deep Navy',
    colors: {
      primary: '30 64 175', // blue-800
      secondary: '219 234 254', // blue-100
      accent: '59 130 246', // blue-500
      background: '15 23 42', // slate-900
      surface: '30 41 59', // slate-800
      text: '248 250 252', // slate-50
      textSecondary: '203 213 225', // slate-300
      border: '51 65 85', // slate-700
      success: '34 197 94', // green-500
      warning: '251 146 60', // orange-400
      error: '239 68 68', // red-500
      info: '125 211 252', // sky-300
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
