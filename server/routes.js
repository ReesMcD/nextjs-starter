let routes = require('next-routes');

module.exports = routes()
  .add({ name: 'posts', pattern: '/posts/:id', page: 'posts' })
  .add({ name: 'user', pattern: '/user/:id', page: 'user/user' });
