import FeedbackService from '@/services/FeedbackService'
export const state = () => ({
  feedBackItems: [],
})

export const actions = {
  async changeFeedbackItems(state) {
    const { data } = await FeedbackService.getAllFeedback()
    state.commit('feedbackItems', data.feedbacks)
  },
  async changeDateFeedbackItems(state, date) {
    const { data } = await FeedbackService.getFeedbackByDate(date)
    state.commit('feedbackItems', data.feedbacks)
  },
}
export const mutations = {
  feedbackItems(state, allFeedback) {
    state.feedBackItems = allFeedback
  },
}
export const getters = {
  getAllFeedback(state) {
    return state.feedBackItems
  },
  getFeedbackLength(state) {
    return state.feedBackItems.length
  },
}
