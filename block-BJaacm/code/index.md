```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->

2. Answer the following with reason:

- `user == newUser;` // output and reason // true // reason is both object are stored at same address.
- `user === newUser;` // true // reason is both object are stored at same address.
- `user.name === newUser.name;` // true // reason is both object are stored at same address.
- `user.name == newUser.name;` // true // reason is both object are stored at same address.
- `user.sibling == newUser.sibling;` // true // reason is both object are stored at same address.
- `user.sibling === newUser.sibling;` // true // reason is both object are stored at same address.
- `user.sibling == allBrothers;` // false // reason is both object are stored at different address.
- `user.sibling === allBrothers;` // false // reason is both object are stored at different address.
- `brothersCopy === allBrothers;` // false // reason is both object are stored at different address.
- `brothersCopy == allBrothers;` //false // reason is both object are stored at different address.
- `brothersCopy == user.sibling;` // true // reason is both object are stored at same address.
- `brothersCopy === user.sibling;` // true // reason is both object are stored at same address.
- `brothersCopy[0] === user.sibling[0];` // true // reason is both object are stored at same address.
- `brothersCopy[1] === user.sibling[1];` // true // reason is both object are stored at same address.
- `user.sibling[1] === newUser.sibling[1];` // true // reason is both object are stored at same address.
