export const state = () => ({
  list: [],
})

export const mutations = {
  add(state, allFeedback) {
    state.list = allFeedback
  },
}
