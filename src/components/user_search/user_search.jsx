import React from 'react';

class UserSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchVal: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    //query API
    e.preventDefault();
    const newVal = e.target.value;
    this.setState({ searchVal: newVal }, () => {
      this.props.fetchUsers(this.state.searchVal);
    });
  }
  handleSubmit(e) {
    //visit github profile
  }
  render() {
    return (
      <div className="user-search">
        <form className="user-search-bar" onSubmit={this.handleSubmit}>
          <input className="user-search-input"
            onChange={this.handleChange}
            type="text"
            placeholder="Search for a Github user..."
            value={this.state.searchVal}
            ref={el => { this.userSearchInput = el; }}
          />
        </form>
      </div>
    );
  }
}
    

export default UserSearch;
