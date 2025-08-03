import React, { useEffect, useState } from 'react';
import GitClient from './GitClient';

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = 'techiesyed'; // Replace with your GitHub username if needed

  useEffect(() => {
    const gitClient = new GitClient();
    gitClient.getRepositories(username)
      .then(repoNames => {
        setRepos(repoNames);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const containerStyle = {
    backgroundColor: '#121212',
    color: '#f1f1f1',
    minHeight: '100vh',
    padding: '40px',
    fontFamily: 'Segoe UI, sans-serif'
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0
  };

  const listItemStyle = {
    backgroundColor: '#1e1e1e',
    padding: '15px',
    margin: '10px 0',
    borderRadius: '8px',
    transition: 'transform 0.2s',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.05)'
  };

  const titleStyle = {
    fontSize: '24px',
    marginBottom: '20px',
    borderBottom: '2px solid #444',
    paddingBottom: '10px'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>GitHub Repositories for <span style={{ color: '#90caf9' }}>{username}</span></h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={listStyle}>
          {repos.map((repo, index) => (
            <li key={index} style={listItemStyle}>
              📁 {repo}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
