import { create } from 'zustand';
import { User } from '../types/User';

interface UserState {
  user: User | null;
  isLoggedIn: boolean;
  setUser: (user: User) => void;
  setLogin: (isLoggedIn: boolean) => void;
}

export const useUserStore = create<UserState>(set => ({
  user: null,
  isLoggedIn: false,
  setUser: (user: User) => set({ user }),
  setLogin: (isLoggedIn: boolean) => set({ isLoggedIn: isLoggedIn }),
}));
