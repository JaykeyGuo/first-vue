export const mutationsMsg = (state, payload) => {
  state.msg = payload.msg
}
export const mutationsSex = (state) => {
  if (state.sex === 'male') {
    state.sex = 'female'
  } else {
    state.sex = 'male'
  }
}
export const mutationsAgeYear = (state, payload) => {
  if (payload.n) {
    state.age = state.age - 1
    state.year = state.year + 1
  } else {
    state.age = state.age + 1
    state.year = state.year - 1
  }
}
export const updateNewInfo = (state, res) => {
  state.name = res.payload.InfoName
  state.sex = res.payload.InfoSex
  state.age = res.payload.InfoAge
  state.year = 2018 - res.payload.InfoAge
}
