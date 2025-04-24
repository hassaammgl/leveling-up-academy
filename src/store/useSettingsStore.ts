
import { create } from 'zustand';

interface SettingsState {
  notifications: {
    quests: boolean;
    achievements: boolean;
    community: boolean;
  };
  theme: 'light' | 'dark' | 'system';
  setNotification: (key: keyof SettingsState['notifications'], value: boolean) => void;
  setTheme: (theme: SettingsState['theme']) => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  notifications: {
    quests: true,
    achievements: true,
    community: true,
  },
  theme: 'system',
  setNotification: (key, value) =>
    set((state) => ({
      notifications: {
        ...state.notifications,
        [key]: value,
      },
    })),
  setTheme: (theme) => set({ theme }),
}));
