export const state = () => ({
  startPeriod: new Date(),
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
