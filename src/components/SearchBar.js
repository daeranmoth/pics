import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  // arrowfunction will automaticaly bind 'this'
  onFormSubmit = (event) => {
    event.preventDefault();
    //we want to communicate this search term up to the parent App component
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
    <div className='ui segment'>
      <form onSubmit={this.onFormSubmit} className='ui form'>
        <div className='field'>
          <label>Image Search</label>
          <input type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
        </div>
      </form>
    </div>
    );
  }
}

export default SearchBar;
