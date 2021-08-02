module.exports = app => ({
  keys: app.name,
  security: {
    csrf: {
      cookieName: 'SESSIONID', // Cookie 中的字段名，默认为 csrfToken
      sessionName: 'SESSIONID', // Session 中的字段名，默认为 csrfToken
    },
  },
});
