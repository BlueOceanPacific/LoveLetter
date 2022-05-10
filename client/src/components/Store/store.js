import create from 'zustand';

const useStore = create((set) => ({
  user: {
    "username": "twheeler",
      "password": "twheeler",
        "email": "twheeler@tw.com",
          "pronouns": "Your Grace",
            "avatar": "/images/avatars/redHatCat.png",
              "gamesPlayed": 37,
                "gamesWon": 30,
    },
  loggedIn: false,
  logIn: (user) => set({ user, loggedIn: true }),
  logOut: () => set({ user: null, loggedIn: false }),
}));

export default useStore;
