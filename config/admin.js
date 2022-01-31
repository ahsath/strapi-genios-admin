module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd3dceb9188bfb1ccd8a1114faef4c142'),
  },
});
