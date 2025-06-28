import { Link, useParams } from 'react-router-dom';
import { useStore } from '../store/store';
import { motion } from 'framer-motion';

export const EventDetail = () => {
  const { id } = useParams();
  const { events } = useStore();
  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Evento no encontrado</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-6"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <Link to="/">Volver</Link>
      </div>
      <div className="mb-8">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <div className="mb-6">
        <p className="text-gray-600 mb-2">Fecha: {event.date}</p>
        <p className="text-gray-600 mb-2">Tipo: {event.type}</p>
        {event.location && (
          <p className="text-gray-600 mb-2">Ubicación: {event.location}</p>
        )}
      </div>
      <div className="prose max-w-none">
        <p>{event.description}</p>
      </div>
      <div className="mt-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Registrarse
        </button>
      </div>
    </motion.div>
  );
};
