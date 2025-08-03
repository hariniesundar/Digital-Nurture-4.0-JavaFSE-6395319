import axios from 'axios';

class GitClient {
  async getRepositories(user) {
    const response = await axios.get(`https://api.github.com/users/${user}/repos`);
    return response.data.map(repo => repo.name);
  }
}

export default GitClient;
