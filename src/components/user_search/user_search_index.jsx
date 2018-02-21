import React from 'react';

class UserSearchIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = { selectedUser: 0 };
  }

  userSearchItem(user, idx) {
    let itemClass = "user-search-item";
    if (idx === this.state.selectedUser) {
      itemClass += " selected-item";
    }
    return (
      <li className={itemClass} key={idx}>
        <a href={user.html_url} className="user-search-link">
          <img className="user-search-avatar" src={user.avatar_url} alt="avatar"/>
          <div className="user-search-username">{user.login}</div>
        </a>
      </li>
    )
  }

  render() {
    const { searchResults } = this.props;
    let listItems;

    if (searchResults.length !== 0) {
      listItems =
        searchResults.map(
          (user, idx) => (
            this.userSearchItem(user, idx)
          )
        );
    } else {
      listItems =
        <li>No results found</li>;
    }

    return(
      <ul className="user-search-list">
        {listItems}
      </ul>
    );
  }

}

export default UserSearchIndex;