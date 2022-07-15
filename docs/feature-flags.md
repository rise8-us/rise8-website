# Feature Flags

## Create
There are two steps. First add a flag to `lib/flags.js`. Ensure the format as follows:
```js
// lib/flags.js
module.exports = {
  // The flag name is the key and the slug is the value.
  MY_NEW_FLAG: 'my-new-flag'
}
```
Second, in the application you can then add a flag by visiting the Flags tab at the top of the page. Please
use the same name as the key in the `module.exports` object and ensure that the slug is the same as
the value.

## Template
To use in template you can use a fragment as follows: 

```html
{% import "fragments/flag.html" as flag %}

{% rendercall flag.isFeatured("my-new-flag") %}
  <!-- your html here-->
{% endrendercall %}
```

## Server
To use in any server code you can use an async function as follows: 

```js
const { MY_NEW_FLAG } = require('lib/flags');
const { isFeatured } = require('modules/flag/flag');

async function someFunction () {
  if (await isFeatured(self, req, MY_NEW_FLAG)) {
    // your code here
  }
}
```
