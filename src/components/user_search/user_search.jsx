import React from 'react';
import UserSearchIndex from './user_search_index';

class UserSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchVal: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.userSearchIndex = this.userSearchIndex.bind(this);
  }

  handleChange(e) {
    //query API
    e.preventDefault();
    const newVal = e.target.value;
    this.setState({ searchVal: newVal }, () => {
      let query = this.state.searchVal;
      if (query !== '') {
        this.props.fetchUsers(this.state.searchVal);
      }
    });
  }

  handleSubmit(e) {
    //visit github profile
  }

  userSearchIndex() {
    if (this.state.searchVal !== '') {
      return <UserSearchIndex 
              searchResults={this.props.searchResults}
               />
    }
  }

  render() {
    return (
      <div className='user-search'>
        <form className='user-search-bar' onSubmit={this.handleSubmit}>
          <input className='user-search-input'
            onChange={this.handleChange}
            type='text'
            placeholder='Search for a Github user...'
            value={this.state.searchVal}
            ref={el => { this.userSearchInput = el; }}
          />
        </form>
        {this.userSearchIndex()}
      </div>
    );
  }
}
    

export default UserSearch;
