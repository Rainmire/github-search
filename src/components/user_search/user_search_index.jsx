import React from 'react';

export default ({searchResults}) => {

  let listItems;

  if (searchResults.length !== 0) {
    listItems =
      searchResults.map(
        (user) => (
          <li key={user.id}>
            <button className="user-search-button" onClick={
              ()=>{
                //visit page
              }
            }>
              <img className="user-search-avatar" src={user.avatar_url} alt="avatar"/>
              <div className="user-search-username">{user.login}</div>
            </button>
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
