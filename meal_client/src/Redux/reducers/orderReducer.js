const initialState = {}

const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'UPDATE_ORDER':
      return payload;

    default:
      return state
  }
}
export default orderReducer;