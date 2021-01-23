const withPWA = require("next-pwa");

module.exports = withPWA({
  images: {
    domains: ["reqres.in"],
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  }
});
