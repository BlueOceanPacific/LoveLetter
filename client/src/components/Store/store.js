import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = create(
  devtools((set) => ({
    user: null,
    setUser: (data) => set({ user: data }),
    loggedIn: false,
    logIn: (user) => set({ user, loggedIn: true }),
    logOut: () => set({ user: null, loggedIn: false }),
    socket: null,
    setSocket: (socket) => set({ socket }),
    game: null,
    setGame: (game) => set({ game }),
  }))
);

export default useStore;
