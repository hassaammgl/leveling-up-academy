
import { create } from 'zustand';

interface SettingsState {
  notifications: {
    quests: boolean;
    achievements: boolean;
    community: boolean;
  };
  rules: {
    penalties: boolean;
    strictMode: boolean;
    timeLimit: boolean;
  };
  setNotification: (key: keyof SettingsState['notifications'], value: boolean) => void;
  setRule: (key: keyof SettingsState['rules'], value: boolean) => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  notifications: {
    quests: true,
    achievements: true,
    community: true,
  },
  rules: {
    penalties: false,
    strictMode: false,
    timeLimit: false,
  },
  setNotification: (key, value) =>
    set((state) => ({
      notifications: {
        ...state.notifications,
        [key]: value,
      },
    })),
  setRule: (key, value) =>
    set((state) => ({
      rules: {
        ...state.rules,
        [key]: value,
      },
    })),
}));
