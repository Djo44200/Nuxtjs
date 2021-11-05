export const state = () => ({
  startPeriod: new Date(new Date().setFullYear(new Date().getFullYear() - 3)),
  endPeriod: new Date(),
})

export const mutations = {
  changeStartPeriod(state, newDate) {
    state.startPeriod = newDate
  },
  changeEndPeriod(state, newDate) {
    state.endPeriod = newDate
  },
}
