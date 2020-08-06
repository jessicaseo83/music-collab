 
import React, { useState } from 'react';
import ReactStickies from 'react-stickies'; //ES6

function Pinboard (props) {
      const [note, setNote] = useState ([])
    
    const onSave = ()=> {
      // Make sure to delete the editorState before saving to backend
      const notes = notes;
      notes.map(note => {
        delete note.editorState;
      })
      // Make service call to save notes
      // Code goes here...
    }
    const onChange = (note) => {
      setNote({ // Update the notes state
        note
      })
    }
    return (
      <ReactStickies
        notes={onSave}
        onChange={onChange}
      />
    )
  }
export default Pinboard;