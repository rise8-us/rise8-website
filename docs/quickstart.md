# Quickstart

### Local MongoDB
```js
// Create admin in new MongoDB instance
db.createUser({ user: 'admin' , pwd: 'admin', roles: ['userAdminAnyDatabase', 'dbAdminAnyDatabase', 'readWriteAnyDatabase']})
db.auth({user: 'admin', pwd: 'admin'})
db.updateUser('admin',
  {
    roles: [ { role: 'root', db: 'admin' } ]
  }
);
```

### Local ApostropheCMS
```shell
# Create initial ApostropheCMS admin
node app @apostrophecms/user:add <username> admin
# input password
```
