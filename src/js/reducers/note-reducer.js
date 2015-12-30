const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'THING': return handleThing(state, action);
    default     : return state;
  }
};

module.exports = reducer;

function handleThing(state, action) {
  return  {...state, };
}