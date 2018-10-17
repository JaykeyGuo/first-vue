export const changeMsg = ({commit}) => {
  commit({
    type: 'mutationsMsg',
    msg: 'Test First with actions'
  })
}
export const changeSex = ({commit}) => {
  commit({
    type: 'mutationsSex'
  })
}
export const changeYoung = ({commit}) => {
  commit({
    type: 'mutationsAgeYear',
    n: true
  })
}
export const changeOld = ({commit}) => {
  commit({
    type: 'mutationsAgeYear',
    n: false
  })
}
export const updateInfo = ({commit}, newInfo) => {
  commit({
    type: 'updateNewInfo',
    payload: newInfo
  })
}
