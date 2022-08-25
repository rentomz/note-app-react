import React, { Component } from 'react';

export class NoteInput extends Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: '',
      body: '',
      count: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
        count: 50-event.target.value.length
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="note-header">
        <p className='count-text'>Sisa Karakter : {this.state.count}</p>
        <form  onSubmit={this.onSubmitEventHandler}>
          <input
            id="name"
            type="text"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            placeholder="Ini adalah Judul ....."
            maxLength={50}
          />
          <br />
          <textarea
            id="email"
            type="text"
            value={this.state.body}
            rows="5"
            onChange={this.onBodyChangeEventHandler}
            placeholder="Tuliskan catatanmu di sini ....."
          />
          <br />
          <div className="btn-right">
          <button type="submit">Buat Catatan</button>

          </div>
        </form>
      </div>
    );
  }
}

export default NoteInput;
