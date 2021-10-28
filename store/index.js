// import service from '@/plugins/service'
// export const services = [service]
export const state = () => ({
  toto: 0,
})

export const mutations = {
  increment(state) {
    state.toto++
  },
}
