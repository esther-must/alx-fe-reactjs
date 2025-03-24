import { useState } from "react";
import { fetchGitHubUser } from "../services/githubService";

const Home = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!username) {
      setError("Please enter a GitHub username");
      return;
    }

    try {
      setError(""); // Clear previous errors
      const data = await fetchGitHubUser(username);
      setUser(data);
    } catch (err) {
      setError("User not found or an error occurred.");
      setUser(null);
    }
  };

  return (
    <div className="container">
      <h2>GitHub User Search</h2>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div className="user-card">
          <img src={user.avatar_url} alt={user.login} width="100" />
          <h3>{user.name || user.login}</h3>
          <p>Followers: {user.followers} | Repos: {user.public_repos}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Home;
