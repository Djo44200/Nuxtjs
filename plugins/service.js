export default ({ $axios, store }, inject) => {
  inject(
    'getFeedbackList',
    async () =>
      await $axios.get('/api/feedbacks').then((resp) => {
        store.commit('feedback/add', resp.data.feedbacks)
        return resp.data.feedbacks
      })
  )
}
