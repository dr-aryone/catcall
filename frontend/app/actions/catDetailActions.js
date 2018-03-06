import { RSAA } from 'redux-api-middleware'
import { forEach } from 'lodash'

export const REQUEST = 'CAT_DETAIL_REQUEST'
export const SUCCESS = 'CAT_DETAIL_SUCCESS'
export const FAILURE = 'CAT_DETAIL_FAILURE'

function cleanCatDetail(pet) {
  let result = _.forEach(pet, function(value, parentKey) {
                  _.forEach(value, function(value, key) {
                    if (_.isArray(value)) {
                        pet[parentKey] = _.map(value, '$t')
                    }
                    else if (key==='$t') {
                      pet[parentKey] = value
                    }
                    else {
                       pet[key] = value['$t'] || value
                       delete pet[parentKey]
                    }
                  })
                })
  return result
}


export function fetchCatDetail(id) {
  return {
    [RSAA]: {
      endpoint: '/api/pet.get?&id=' + id + '&output=full',
      method: 'GET',
      types: [
        REQUEST,
        {
          type: SUCCESS,
          payload: (action, state, res) => {
            return res.json().then(json => json['petfinder']['pet'])
              .then(pet => cleanCatDetail(pet))
          }
        },
        FAILURE
      ]
    }
  }
}