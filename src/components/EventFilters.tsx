import { useEffect } from 'react';
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
    const newValue = e.target.value;
    setSearchTerm(newValue);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value as EventType;
    setSelectedType(newValue);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSelectedDate(newValue);
  };

  useEffect(() => {
    filterEvents();
  }, [searchTerm, selectedType, selectedDate, filterEvents]);

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center p-4 bg-white rounded-lg shadow-md">
      <div className="w-full">
        <input
          type="text"
          inputMode="text"
          name="search"
          placeholder="Buscar eventos..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border rounded-lg bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="w-full">
        <select
          name="type"
          value={selectedType}
          onChange={handleTypeChange}
          className="w-full p-2 border rounded-lg bg-white text-gray-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">Todos los tipos</option>
          <option value="virtual">Virtual</option>
          <option value="presencial">Presencial</option>
          <option value="hibrido">Hibrido</option>
        </select>
      </div>
      <div className="w-full">
        <input
          type="date"
          inputMode="text"
          name="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="w-full p-1.5 border rounded-lg bg-white text-gray-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};
