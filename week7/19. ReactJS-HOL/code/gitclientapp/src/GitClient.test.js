const axios = require('axios');
const GitClient = require('./GitClient').default;

jest.mock('axios');

describe('Git Client Tests', () => {
  test('should return repository names for techiesyed', async () => {
    const mockResponse = {
      data: [
        { name: 'repo1' },
        { name: 'repo2' }
      ]
    };

    axios.get.mockResolvedValue(mockResponse);

    const client = new GitClient();
    const repos = await client.getRepositories('techiesyed');

    expect(repos).toEqual(['repo1', 'repo2']);
    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/techiesyed/repos');
  });
});
