const initialState = {}

const menuReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'UPDATE_MENU':
      return payload;
    default:
      return state
  }
}
export default menuReducer;