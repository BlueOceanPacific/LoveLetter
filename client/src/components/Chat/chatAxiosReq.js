const axios = require('axios');

const chatInstance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    ContentType: 'application/json',
  },
});

const postMessage = (message) => chatInstance.post('TBD', message);

module.exports = {
  postMessage,
};
