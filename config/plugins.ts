export default ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', 'my-super-secret-jwt-key'),
    },
  },
  upload: {
    enabled: true,
  },
});