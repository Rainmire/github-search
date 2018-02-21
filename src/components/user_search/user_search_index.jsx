import React from 'react';

export default ({searchResults}) => {

  let listItems;

  if (userSearchResults.length !== 0) {
    listItems =
      userSearchResults.map(
        (user) => (
          <li key={user.userId}>
            <button className="user-search-button" onClick={
              ()=>{
                receiveUserSelection(user);
                clearState();
                focusUserSearchInput();
              }
            }>
              {user.displayName}
            </button>
          </li>
        )
      );
  } else if (firstTime === false){
    listItems =
      <li>No results found</li>;
  }


  return(
    <ul className="user-search-list">
      {listItems}
    </ul>
  );
};
