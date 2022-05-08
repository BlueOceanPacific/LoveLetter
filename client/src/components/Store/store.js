import create from 'zustand';

const useStore = create((set) => ({
  username: null,
  loggedIn: false,
  logIn: (username) => set({ username, loggedIn: true }),
  logOut: () => set({ username: null, loggedIn: false }),
}));

export default useStore;
