/* eslint-disable array-callback-return */
import React from 'react';
import NoteList from './NoteList';

function NoteBody({ notes, onDelete, onChangeStatus }) {
  let noteActive = [];
  let archives = [];

  notes.map((note) => {
    if (note.archived === true) {
      archives.push(note);
    } else {
      noteActive.push(note);
    }
  });


  return (
    <div className="note-body">
      <h2>Catatan Aktif</h2>
      <NoteList notes={noteActive} onDelete={onDelete}  onChangeStatus={onChangeStatus}/>

      <h2>Arsip</h2>
      <NoteList notes={archives}  onDelete={onDelete}  onChangeStatus={onChangeStatus} />
    </div>
  );
}

export default NoteBody;
