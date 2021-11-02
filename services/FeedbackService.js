import clientAPI from './AxiosConfig'

const baseURL = '/api'
export default {
  getAllFeedback() {
    return clientAPI(baseURL).get('/feedbacks')
  },
  getFeedbackByDate(date) {
    console.log(date)
    return clientAPI(baseURL).get(
      '/feedbacks/date/' + date.start + '/' + date.end
    )
  },
}
