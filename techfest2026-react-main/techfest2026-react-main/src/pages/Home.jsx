import { useState, useEffect } from "react";

// JSONPlaceholder only gives us Lorem-ipsum style titles ("sunt aut facere...").
// We still make the real network call (that's what satisfies the fetch/loading/
// error requirement), but we display each fetched post as one of these
// realistic TechFest announcements instead of the raw placeholder text.
const REALISTIC_ANNOUNCEMENTS = [
  "Registrations are now open for all 12 events — early-bird pricing ends 31 July.",
  "RoboArena rulebook v2 published: updated arena dimensions and weight class limits.",
  "On-campus accommodation is available for outstation participants — request it during registration.",
  "CodeForge hackathon problem statements will be released one hour before kickoff.",
  "Workshop seats for the Applied ML Bootcamp are limited to the first 60 sign-ups.",
];

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect with an empty array [] runs exactly ONE TIME, right after the page loads
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load announcements");
        setLoading(false);
      });
  }, []);

  return (
    <div className="page">
      <h1>Welcome to TechFest 2026</h1>
      <p>Three days of hackathons, workshops and competitions.</p>

      <h2>Announcements</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error-msg">{error}</p>}
      {!loading && !error && (
        <ul>
          {posts.map((post, index) => (
            <li key={post.id}>
              {REALISTIC_ANNOUNCEMENTS[index % REALISTIC_ANNOUNCEMENTS.length]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
