import axios from 'axios';

export default class HttpService {
  constructor() {}

  async get(url, options = {}) {
    console.log('GET Request');
    return axios
      .get(url, options)
      .then(response => {
        return response;
      })
      .catch(error => {
        console.log(error);
      });
  }

  async post(url, data, options) {
    console.log('POST Request');
  }

  async put(url, data, options) {
    console.log('PUT Request');
  }

  async delete(url, data, options) {
    console.log('DELETE Request');
  }
}
