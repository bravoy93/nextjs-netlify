const withPWA = require("next-pwa");

module.exports = {
  images: {
    domains: ["reqres.in"],
  },
  pwa: {
    dest: "public",
  },
};
