import * as axios from 'axios'
import * as R from 'ramda'

export const getTask = function (trueORfalse) {
    return axios
        .get('https://api.myjson.com/bins/oufit')
        .then(response => response.data)
        .then(data => {
            var completeOption = n => {
                return n.completeOption = trueORfalse
            };
            return R.filter(completeOption, data)
        })
}