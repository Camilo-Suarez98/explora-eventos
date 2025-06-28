import { Link } from 'react-router-dom';
import type { EventCardProps } from '../types/eventTypes';

export const EventCard = ({ event }: EventCardProps) => {
  const typeColors = {
    virtual: 'bg-blue-100 text-blue-800',
    presencial: 'bg-green-100 text-green-800',
    hibrido: 'bg-purple-100 text-purple-800',
  };

  return (
    <Link to={`/event/${event.id}`} className="flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{event.date}</p>
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${typeColors[event.type as keyof typeof typeColors]}`}>
          {event.type}
        </span>
      </div>
    </Link>
  );
};
