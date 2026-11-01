import { useState, useEffect } from "react";
import axios from "axios";
import EventList from "../components/EventList";

const API = "http://localhost:5001/api";

function Events() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(API + "/events")
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load events");
        setLoading(false);
      });
  }, []);

  const filteredEvents = events.filter((event) => {
    const nameMatches = event.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatches =
      category === "All" || event.category === category;

    return nameMatches && categoryMatches;
  });

  if (loading) {
    return (
      <div className="page">
        <h1>Events</h1>
        <p>Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <h1>Events</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Events</h1>

      <input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Technical">Technical</option>
        <option value="Workshop">Workshop</option>
        <option value="Cultural">Cultural</option>
        <option value="Sports">Sports</option>
      </select>

      <EventList events={filteredEvents} />
    </div>
  );
}

export default Events;