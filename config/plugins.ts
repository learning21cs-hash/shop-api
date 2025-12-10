export default ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', 'my-super-secret-jwt-key-change-me'),
    },
  },
});
```

Puis dans **Render → Environment**, ajoute :
```
JWT_SECRET = mon-secret-jwt-super-long-et-aleatoire-123456