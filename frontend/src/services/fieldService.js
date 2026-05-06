import { get } from './apiClient.js';

function getFieldById(id) {
  return get(`/api/fields/${id}`);
}

export { getFieldById };
