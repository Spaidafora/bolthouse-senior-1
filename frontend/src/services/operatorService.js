import { get } from './apiClient.js';

function getOperatorById(id) {
  return get(`/api/operators/${id}`);
}

export { getOperatorById };
