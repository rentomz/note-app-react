import React from 'react';
import { showFormattedDate } from '../utils/index';

function NoteItem({ title, body, createdAt,id,archived, onDelete, onChangeStatus  }) {
  return (
    <div className="note-item">
      <div className="item-top">
      <h3 className="title">{title}</h3>
      <p className="date">{showFormattedDate(createdAt)}</p>

      <p className="body">{body}</p>
      </div>
      <div className="action">
        <button className='btn red' onClick={()=> onDelete(id)}>Delete</button>
        <button className='btn orange' onClick={()=> onChangeStatus(id)}> {archived ? "Pindahkan" : "Arsipkan"}</button>
      </div>
      
    </div>
  );
}

export default NoteItem;
