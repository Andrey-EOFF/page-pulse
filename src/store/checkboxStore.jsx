import create from "zustand";

const useCheckboxStore = create((set) => ({
  nestedChecked: false,
  setNestedChecked: (isChecked) => set({ nestedChecked: isChecked }),
}));

export default useCheckboxStore;
