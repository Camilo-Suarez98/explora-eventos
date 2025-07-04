import { Link } from 'react-router-dom';
import type { EventCardProps } from '../types/eventTypes';
import { typeColors } from '../data/colorsTypeOfEvent';

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <Link
      to={`/event/${event.id}`}
      className="flex flex-col rounded-lg overflow-hidden shadow-md duration-500 transition hover:shadow-2xl hover:text-gray-500"
    >
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex-grow">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{event.date}</p>
        <span
          className={`inline-flex items-center capitalize font-bold px-2 py-1 rounded-full text-sm ${typeColors[event.type as keyof typeof typeColors]}`}
        >
          {event.type}
        </span>
      </div>
    </Link>
  );
};
