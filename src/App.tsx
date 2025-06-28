import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStore } from './store/store';
import { mockEvents } from './data/events';
import { EventFilters } from './components/EventFilters';
import { EventList } from './components/EventList';
import { EventDetail } from './components/EventDetail';
import { Header } from './components/Header';

function App() {
  const { setEvents } = useStore();
  if (!useStore.getState().events.length) {
    setEvents(mockEvents);
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="py-8">
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
