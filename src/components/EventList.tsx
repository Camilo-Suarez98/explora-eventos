import { useStore } from '../store/store';
import { EventCard } from './EventCard';

export const EventList = () => {
  const { filteredEvents } = useStore();

  if (filteredEvents.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No se encontraron eventos que coincidan con tu búsqueda.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};
