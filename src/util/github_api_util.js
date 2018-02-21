export const fetchUsers = (query) => (
  $.ajax({
    method: 'GET',
    url: `https://api.github.com/search/users?q=${query}&access_token=c6c9c24ec22deb4a3322b9117beb201d6fc72e8c`
  })
);