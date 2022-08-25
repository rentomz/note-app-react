import React, { Component } from 'react';
import NoteInput from './components/NoteInput';
import NoteBody from './components/NoteBody';
import { getInitialData } from './utils/index';
import NavSearch from './components/NavSearch';

class NoteApp extends Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      notes: getInitialData(),
      search: '',
      notesFilter: [],
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onChangeStatusHandler = this.onChangeStatusHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchChangeEventHandler= this.onSearchChangeEventHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    let date = new Date();
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: date,
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }
 
  onChangeStatusHandler(id) {
    const notes = this.state.notes.map(note => note.id === id ? {...note, archived : !note.archived} : note);
    this.setState({ notes });
  }


  onSearchChangeEventHandler(event) {
    const value = event.target.value.toLowerCase();

    let noteFilter = this.state.notes.filter((data) => {
      return data.title.toLowerCase().match(new RegExp(value, 'g'));
    });

    this.setState(() => {
      return {
        search: event.target.value,
        notesFilter: noteFilter
      };
    });
  }
 

  render() {
    return (
      <div className="div">
        <NavSearch inputSearch={this.state.search} onChangeSearch={this.onSearchChangeEventHandler}/>
        {/* <nav className='navbar'>
        <input
            id="name"
            type="text"
            value={this.state.search}
            onChange={this.onSearchChangeEventHandler}
            placeholder="Ini adalah Judul ....."
          />
        </nav> */}
        <div className="note-app">
          <h2>Buat Catatan</h2>
          <NoteInput addNote={this.onAddNoteHandler} />
          <NoteBody notes={this.state.search === "" ? this.state.notes : this.state.notesFilter}  onDelete={this.onDeleteHandler} onChangeStatus={this.onChangeStatusHandler}/>
        </div>
      </div>
    );
  }
}

export default NoteApp;
