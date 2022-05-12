import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = create(
  devtools((set) => ({
    user: null,
    setUser: (data) => set({ user: data }),
    // user: true,
    loggedIn: false,
    logIn: (user) => set({ user, loggedIn: true }),
    logOut: () => set({ user: null, loggedIn: false }),
    socket: null,
    setSocket: (socket) => set({ socket })
  }))
);

export default useStore;
