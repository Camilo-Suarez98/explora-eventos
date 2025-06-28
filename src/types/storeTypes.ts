import type { Event, EventType } from './eventTypes';

export interface Store {
  events: Event[];
  filteredEvents: Event[];
  searchTerm: string;
  selectedType: 'all' | EventType;
  selectedDate: string;
  setEvents: (events: Event[]) => void;
  setSearchTerm: (term: string) => void;
  setSelectedType: (type: 'all' | EventType) => void;
  setSelectedDate: (date: string) => void;
  filterEvents: () => void;
}