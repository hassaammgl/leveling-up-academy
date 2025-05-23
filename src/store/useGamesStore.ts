
import { create } from 'zustand';

interface Game {
  id: string;
  name: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedTime: string;
  icon: string;
  color: string;
}

interface GamesState {
  availableGames: Game[];
  completedQuests: string[];
  showGamesModal: boolean;
  currentGame: Game | null;
  markQuestComplete: (questId: string) => void;
  setShowGamesModal: (show: boolean) => void;
  setCurrentGame: (game: Game | null) => void;
  getRandomGames: () => Game[];
}

export const useGamesStore = create<GamesState>((set, get) => ({
  availableGames: [
    {
      id: 'memory-match',
      name: 'Memory Match',
      description: 'Match pairs of programming concepts',
      difficulty: 'easy',
      estimatedTime: '3-5 min',
      icon: '🧠',
      color: '#34D399'
    },
    {
      id: 'code-puzzle',
      name: 'Code Puzzle',
      description: 'Arrange code blocks in the correct order',
      difficulty: 'medium',
      estimatedTime: '5-8 min',
      icon: '🧩',
      color: '#FACC15'
    },
    {
      id: 'typing-race',
      name: 'Typing Race',
      description: 'Type code snippets as fast as you can',
      difficulty: 'easy',
      estimatedTime: '2-4 min',
      icon: '⚡',
      color: '#38BDF8'
    },
    {
      id: 'bug-hunt',
      name: 'Bug Hunt',
      description: 'Find and fix bugs in code snippets',
      difficulty: 'hard',
      estimatedTime: '8-12 min',
      icon: '🐛',
      color: '#F87171'
    },
    {
      id: 'pattern-match',
      name: 'Pattern Match',
      description: 'Complete programming patterns',
      difficulty: 'medium',
      estimatedTime: '4-7 min',
      icon: '🎯',
      color: '#A78BFA'
    }
  ],
  completedQuests: [],
  showGamesModal: false,
  currentGame: null,
  markQuestComplete: (questId) =>
    set((state) => ({
      completedQuests: [...state.completedQuests, questId],
      showGamesModal: true,
    })),
  setShowGamesModal: (show) =>
    set({ showGamesModal: show }),
  setCurrentGame: (game) =>
    set({ currentGame: game }),
  getRandomGames: () => {
    const { availableGames } = get();
    const shuffled = [...availableGames].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  },
}));
