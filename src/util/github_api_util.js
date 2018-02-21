const $ = require ('jquery');

export const fetchUsers = (query) => (
  $.ajax({
    method: 'GET',
    url: `https://api.github.com/search/users?q=${query}&access_token=09f8c4c73930306cbd5b6188b3fab565cf0e4cbf`
  })
);
