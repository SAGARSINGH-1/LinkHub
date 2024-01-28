import { create } from 'zustand'

export const useStore = create((set) => ({   
    darkMode: false,
    style: "bg-slate-900 text-gray-100",
    toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}))
