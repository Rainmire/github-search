const $ = require ('jquery');

export const fetchUsers = (query) => (
  //Define your key in .env
  $.ajax({
    method: 'GET',
    url: `https://api.github.com/search/users?q=${query}&access_token=${process.env.REACT_APP_API_KEY}`
  })
);
