import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onChangeStatus }) {
  return (
    <div className="list-card">
      {notes.map((note) => (
        <NoteItem key={note.id} {...note}  onDelete={onDelete}  onChangeStatus={onChangeStatus} />
      ))}
    </div>
  );
}

export default NoteList;
