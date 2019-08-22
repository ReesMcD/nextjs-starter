let routes = require('next-routes');

// Add Routes
module.exports = routes().add({
  name: 'user',
  pattern: '/user/:id',
  page: 'user/user'
});
