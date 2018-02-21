const $ = require ('jquery');

export const fetchUsers = (query) => (
  $.ajax({
    method: 'GET',
    url: `https://api.github.com/search/users?q=${query}&access_token=f8e3713dc42fdd8d4abb21ef93e0372e392835a1`
  })
);
