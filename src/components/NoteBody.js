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

  console.log(noteActive.length);


  return (
    <div className="note-body">
      <h2>Catatan Aktif</h2>
      {noteActive.length > 0 ?  <NoteList notes={noteActive} onDelete={onDelete}  onChangeStatus={onChangeStatus}/> : <h4>Tidak ada Catatan</h4> }

      <h2>Arsip</h2>
      <NoteList notes={archives}  onDelete={onDelete}  onChangeStatus={onChangeStatus} />
    </div>
  );
}

export default NoteBody;
