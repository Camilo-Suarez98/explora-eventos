import { create } from 'zustand';
import type { Store } from '../types/storeTypes';

export const useStore = create<Store>((set) => ({
  events: [],
  filteredEvents: [],
  searchTerm: '',
  selectedType: 'all',
  setEvents: (events) => set({ events }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  setSelectedType: (type) => set({ selectedType: type }),
  filterEvents: () => set((state) => ({
    filteredEvents: state.events.filter((event) => {
      const matchesSearch = event.title.toLowerCase().includes(state.searchTerm.toLowerCase());
      const matchesType = state.selectedType === 'all' || event.type === state.selectedType;
      return matchesSearch && matchesType;
    }),
  })),
}));
