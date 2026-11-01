import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5001/api";

function MyRegistrations() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get(API + "/registrations/my", {
    withCredentials: true
})
      .then((res) => {
        setRegistrations(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(
          err.response?.data?.message || "Could not load registrations"
        );
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="page">
        <h1>My Registrations</h1>
        <p>Loading registrations...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <h1>My Registrations</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>My Registrations</h1>

      {registrations.length === 0 ? (
        <p>No registrations found.</p>
      ) : (
        registrations.map((registration) => (
          <div key={registration._id}>
            <h3>{registration.event?.name}</h3>
            <p>Category: {registration.event?.category}</p>
            <p>Fee: ₹{registration.event?.fee}</p>
            <p>
              Registered on:{" "}
              {new Date(registration.registeredAt).toLocaleDateString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyRegistrations;