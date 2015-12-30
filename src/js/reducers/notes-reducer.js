const initialState = {
  input: "",
  notes: [],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE'        : return addNote(state, action);
    case 'EDIT_NOTE_INPUT' : return editNoteInput(state, action);
    default                : return state;
  }
};

module.exports = notesReducer;

function addNote(state, action) {
  let oldNotes = state.notes;
  let newNote = state.input;
  let notes = [...oldNotes, newNote];
  let input = ""; // clear input
  return  {...state, notes, input};
}

function editNoteInput(state, action) {
  let input = action.value;
  return  {...state, input};
}