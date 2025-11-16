import apiLocal from "../../service/api/apiLocal";
import { create } from 'zustand';

// O 'create' é a função principal do Zustand.
// Ela recebe uma função que define o estado inicial e as ações.
// A função 'set' é usada para atualizar o estado de forma imutável.

const useCounterStore = create((set) => ({
  
  count: 0,
  lines: [],
  baseApiLines: "linhas",

  // 2. Ações (Actions) - Funções que modificam o estado
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },

  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
  
  reset: () => {
    set({ count: 0 });
  },

 fetchLines: async () => {    
      const response = await apiLocal.get("linhas");       
      set({ lines: response.data });
  },
}));

export default useCounterStore;