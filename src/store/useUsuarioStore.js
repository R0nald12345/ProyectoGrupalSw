import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUsuarioStore = create(
  persist(
    (set) => ({
      usuario: null,
      setUsuario: (usuario) => set({ usuario }),
      clearUsuario: () => set({ usuario: null }),
    }),
    { name: 'usuario-store' }
  )
);