import axios from 'axios'

export const DISPLAY_CHARACTERS = 'DISPLAY_CHARACTERS'

export const displayCharacters = characters => ({
  type: DISPLAY_CHARACTERS,
  payload: characters
})

export const getCharacters = () => dispatch => {
  axios({
    method: 'get',
    url: 'http://hp-api.herokuapp.com/api/characters'
  })
    .then(res => {
      console.log(res.data)
      dispatch(displayCharacters(res.data))
    })
    .catch(err => err)
}
