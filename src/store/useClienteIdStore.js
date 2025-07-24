import { create } from 'zustand'

export const useClienteIdStore = create((set, get) => ({
  clienteId: null,
  rolId: null,
  suscripcionId: null,

  // SETTERS
  setClienteId: (id) => {
    if (id) localStorage.setItem("clienteId", String(id));
    else localStorage.removeItem("clienteId");
    set({ clienteId: id });
  },
  setRolId: (id) => {
    if (id) localStorage.setItem("rolId", String(id));
    else localStorage.removeItem("rolId");
    set({ rolId: id });
  },
  setSuscripcionId: (id) => {
    if (id) localStorage.setItem("suscripcionId", String(id));
    else localStorage.removeItem("suscripcionId");
    set({ suscripcionId: id });
  },

  // GETTERS
  getClienteId: () => get().clienteId,
  getRolId: () => get().rolId,
  getSuscripcionId: () => get().suscripcionId,

  clearClienteId: () => {
    localStorage.removeItem("clienteId");
    localStorage.removeItem("rolId");
    localStorage.removeItem("suscripcionId");
    set({ clienteId: null, rolId: null, suscripcionId: null });
  }
}));