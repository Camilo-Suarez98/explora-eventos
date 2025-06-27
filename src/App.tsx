import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStore } from './store/store';
import { mockEvents } from './data/events';
import { EventFilters } from './components/EventFilters';
import { EventList } from './components/EventList';
import { EventDetail } from './components/EventDetail';

function App() {
  const { setEvents } = useStore();

  // Inicializar eventos al montar la aplicación
  if (!useStore.getState().events.length) {
    setEvents(mockEvents);
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div className="flex items-center py-4">
                  <h1 className="text-2xl font-bold text-gray-800">Explora Eventos</h1>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <EventFilters />
                  <EventList />
                </div>
              }
            />
            <Route path="/event/:id" element={<EventDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
