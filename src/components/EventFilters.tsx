import { useStore } from '../store/store';
import type { EventType } from '../types/eventTypes';

export const EventFilters = () => {
  const {
    searchTerm,
    selectedType,
    selectedDate,
    setSearchTerm,
    setSelectedType,
    setSelectedDate,
    filterEvents,
  } = useStore();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    filterEvents();
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value as EventType);
    filterEvents();
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
    filterEvents();
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center p-4 bg-white rounded-lg shadow-md">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Buscar eventos..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex-1">
        <select
          value={selectedType}
          onChange={handleTypeChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">Todos los tipos</option>
          <option value="virtual">Virtual</option>
          <option value="presencial">Presencial</option>
          <option value="hibrido">Híbrido</option>
        </select>
      </div>
      <div className="flex-1">
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};
