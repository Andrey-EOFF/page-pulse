import create from "zustand";

const useStore = create((set) => ({
  activeNavItem: "Base",
  setActiveNavItem: (navItem) => set({ activeNavItem: navItem }),
}));

export default useStore;
