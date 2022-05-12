import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = create(
  devtools((set) => ({
    // user: null,
    user: {
      username: 'twheeler',
      password: 'twheeler',
      email: 'twheeler@tw.com',
      pronouns: 'Your Grace',
      avatar: '/images/avatars/redHatCat.png',
      gamesPlayed: 37,
      gamesWon: 30,
    },
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
