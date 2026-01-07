import React, { createContext, useState, useContext, useEffect } from 'react';
import { getEvents, saveEvents } from '../utils/localStorageHelpers';

export const EventContext = createContext();

export function EventProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Load events from localStorage on initial render
  useEffect(() => {
    const loadedEvents = getEvents();
    setEvents(loadedEvents);
  }, []);

  // Save events to localStorage whenever they change
  useEffect(() => {
    saveEvents(events);
  }, [events]);

  const addEvent = (newEvent) => {
    const eventWithId = {
      ...newEvent,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setEvents([...events, eventWithId]);
    return eventWithId;
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const updateEvent = (id, updatedEvent) => {
    const eventWithUpdate = {
      ...updatedEvent,
      updatedAt: new Date().toISOString()
    };
    
    setEvents(events.map(event => 
      event.id === id ? { ...event, ...eventWithUpdate } : event
    ));
  };

  const getEventById = (id) => {
    return events.find(event => event.id === id);
  };

  const getUpcomingEvents = () => {
    const now = new Date();
    return events
      .filter(event => new Date(event.date) >= now)
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  const getPastEvents = () => {
    const now = new Date();
    return events
      .filter(event => new Date(event.date) < now)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  const getStats = () => {
    const now = new Date();
    const upcoming = events.filter(event => new Date(event.date) >= now).length;
    const past = events.filter(event => new Date(event.date) < now).length;
    const total = events.length;
    
    let attendees = 0;
    events.forEach(event => {
      if (event.attendees) {
        attendees += parseInt(event.attendees) || 0;
      }
    });

    return { total, upcoming, past, attendees };
  };

  const searchEvents = (query) => {
    const searchTerm = query.toLowerCase();
    return events.filter(event => 
      event.title.toLowerCase().includes(searchTerm) ||
      event.description.toLowerCase().includes(searchTerm) ||
      event.location.toLowerCase().includes(searchTerm)
    );
  };

  return (
    <EventContext.Provider value={{
      events,
      selectedEvent,
      setSelectedEvent,
      addEvent,
      deleteEvent,
      updateEvent,
      getEventById,
      getUpcomingEvents,
      getPastEvents,
      getStats,
      searchEvents
    }}>
      {children}
    </EventContext.Provider>
  );
}