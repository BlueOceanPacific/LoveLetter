import create from 'zustand';

const useStore = create((set) => ({
  user: null,
  loggedIn: false,
  logIn: (user) => set({ user, loggedIn: true }),
  logOut: () => set({ user: null, loggedIn: false }),
}));

export default useStore;
