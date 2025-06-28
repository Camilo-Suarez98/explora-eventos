import type { Event, EventType } from './eventTypes';

export interface Store {
  events: Event[];
  filteredEvents: Event[];
  searchTerm: string;
  selectedType: 'all' | EventType;
  setEvents: (events: Event[]) => void;
  setSearchTerm: (term: string) => void;
  setSelectedType: (type: 'all' | EventType) => void;
  filterEvents: () => void;
}