import { create } from 'zustand';
import type { Store } from '../types/storeTypes';

export const useStore = create<Store>((set) => ({
  events: [],
  filteredEvents: [],
  searchTerm: '',
  selectedType: 'all',
  selectedDate: '',
  setEvents: (events) => set({ events, filteredEvents: events }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  setSelectedType: (type) => set({ selectedType: type }),
  setSelectedDate: (date) => set({ selectedDate: date }),
  filterEvents: () => set((state) => {
    const searchLower = state.searchTerm.toLowerCase();
    return {
      filteredEvents: state.events.filter((event) => {
        const matchesSearch =
          event.title.toLowerCase().includes(searchLower) ||
          (event.description?.toLowerCase()?.includes(searchLower) || false);
        const matchesType = state.selectedType === 'all' || event.type === state.selectedType;
        const matchesDate = !state.selectedDate ||
          new Date(event.date).toISOString().split('T')[0] === state.selectedDate;

        return matchesSearch && matchesType && matchesDate;
      }),
    };
  }),
}));
