import { get } from './apiClient.js';

function getTractorById(id) {
  return get(`/api/tractors/${id}`);
}

export { getTractorById };
