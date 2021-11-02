import clientAPI from './AxiosConfig';

const baseURL = '/api';
export default {
  getAllFeedback() {
    return clientAPI(baseURL).get('/feedbacks');
  },


};