import React, { Component } from 'react';

class NavSearch extends Component {
  render() {
    return (
      <nav className='navbar-custom'>
        <div className="content">
        <h2>Notes</h2>
        <input
            id="search"
            type="text"
            value={this.props.inputSearch}
            onChange={this.props.onChangeSearch}
            placeholder="Cari Notes disini ....."
          />
        </div>
      </nav>
    );
  }
}

export default NavSearch;