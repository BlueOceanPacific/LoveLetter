import create from 'zustand';
import { devtools } from 'zustand/middleware';


const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value));

const useStore = create(
  devtools((set) => ({
    user: null  || getLocalStorage("user"),
    setUser: (data) => {
      set({ user: data })
  },
    loggedIn: false,
    logIn: (user) => {
      set({ user, loggedIn: true })
      setLocalStorage("user", user);
    }
      ,
    logOut: () => set({ user: null, loggedIn: false }),
    socket: null,
    setSocket: (socket) => set({ socket }),
    game: null,
    setGame: (game) => set({ game }),

  }))
);


export default useStore;
