const $ = require ('jquery');

export const fetchUsers = (query) => (
  $.ajax({
    method: 'GET',
    url: `https://api.github.com/search/users?q=${query}&access_token=ca1901d12ef6572be359156bf10f5ee560112d4b`
  })
);
