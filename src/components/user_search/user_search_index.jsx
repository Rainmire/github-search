import React from 'react';

export default ({searchResults}) => {

  let listItems;

  if (searchResults.length !== 0) {
    listItems =
      searchResults.map(
        (user) => (
          <li key={user.id}>
            <a href={user.html_url} className="user-search-link">
              <img className="user-search-avatar" src={user.avatar_url} alt="avatar"/>
              <div className="user-search-username">{user.login}</div>
            </a>
          </li>
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
};
