import { useNavigate, useParams } from 'react-router-dom';
import { useStore } from '../store/store';
import { motion } from 'framer-motion';
import { typeColors } from '../data/colorsTypeOfEvent';

export const EventDetail = () => {
  const { id } = useParams();
  const { events } = useStore();
  const navigate = useNavigate();
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
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="w-1/4 flex items-center gap-1 bg-blue-500 text-sm transition duration-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 hover:text-gray-100 md:w-auto focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Volver
        </motion.button>
      </div>
      <div className="mb-6">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full object-cover rounded-lg"
        />
      </div>
      <span
        className={`inline-flex items-center capitalize font-bold px-2 py-1 rounded-full text-md ${typeColors[event.type as keyof typeof typeColors]}`}
      >
        {event.type}
      </span>
      <h1 className="text-3xl text-orange-600 font-bold my-4">{event.title}</h1>
      <div className="mb-6">
        <div className="max-w-none text-gray-600 text-lg mb-4">
          <p>{event.description}</p>
        </div>
        <p className="text-gray-600 mb-4">
          Fecha: <span className="font-bold">{event.date}</span>
        </p>
        {event.location && (
          <p className="text-gray-600 mb-4">
            Ubicación: <span className="font-bold">{event.location}</span>
          </p>
        )}
      </div>
      <div className="mt-8">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.80 }}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-500 hover:bg-blue-600 hover:text-gray-100 focus:outline-none">
          Registrarse
        </motion.button>
      </div>
    </motion.div >
  );
};
