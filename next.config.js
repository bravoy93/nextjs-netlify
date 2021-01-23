const withPWA = require("next-pwa");

// module.exports = {
//   images: {
//     domains: ["reqres.in"],
//   },
//   pwa: {
//     dest: "public",
//   },
// };

module.exports = withPWA({
  images: {
    domains: ["reqres.in"],
  },
  pwa: {
    dest: 'public'
  }
});
