import { useEffect, useState } from "react";
import "../index.css";

export const Search = () => {
  const [username, setUsername] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const fetchAPI = async (searchUsername) => {
    setLoading(true);
    setError("");
    setHasSearched(true);
    try {
      const API = `https://api.github.com/users/${searchUsername}`;
      const res = await fetch(API);
      
      if (!res.ok) {
        throw new Error("User not found");
      }
      
      const data = await res.json();
      console.log(data);
      setUsername(data);
    } catch (error) {
      console.log(error);
      setError(error.message || "Failed to fetch user data");
      setUsername({});
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (searchInput.trim()) {
      fetchAPI(searchInput.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <section className="container">
        <header>
          <h1>Github Profile Explorer</h1>
        </header>
        
        <div className="search-section">
          <input 
            type="text" 
            placeholder="Enter GitHub username" 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>

        {error && <div className="error">{error}</div>}
        
        {loading ? (
          <div className="loading">Loading profile...</div>
        ) : hasSearched && username && Object.keys(username).length > 0 ? (
          <div className="pokemon-card">
            <figure>
              <img 
                src={username.avatar_url || "https://avatars.githubusercontent.com/u/143387296?v=4"} 
                alt="Profile Avatar" 
              />
            </figure>
            
            <h2 className="profile-name">{username.name || username.login || "Loading..."}</h2>
            <p className="profile-username">@{username.login || "username"}</p>
            <p className="profile-bio">{username.bio || "No bio available"}</p>
            
            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-number">{username.public_repos || 0}</span>
                <span className="stat-label">Repositories</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{username.followers || 0}</span>
                <span className="stat-label">Followers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{username.following || 0}</span>
                <span className="stat-label">Following</span>
              </div>
            </div>
            
            <div className="profile-details">
              {username.location && (
                <div className="detail-item">
                  <svg className="detail-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>{username.location}</span>
                </div>
              )}
              
              {username.company && (
                <div className="detail-item">
                  <svg className="detail-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>{username.company}</span>
                </div>
              )}
              
              {username.created_at && (
                <div className="detail-item">
                  <svg className="detail-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 7h12v9H4V7z"/>
                  </svg>
                  <span>Joined {new Date(username.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              )}
            </div>
            
            <div className="profile-buttons">
              <a 
                href={username.html_url || "#"} 
                className="btn btn-primary" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Profile
              </a>
              <button className="btn btn-secondary">Follow</button>
            </div>
          </div>
        ) : !hasSearched ? (
          <div className="pokemon-card">
            <div className="welcome-message">
              <h2 className="profile-name">Welcome to GitHub Profile Explorer</h2>
              {/* <p className="profile-bio">Enter a GitHub username above to explore their profile</p> */}
              <div className="welcome-icon">
                <svg width="80" height="80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
};