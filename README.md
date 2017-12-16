<img src="docs/resources/logo_icon.png" alt="Logo" width="86">

### **c** (:art:)
_A console.log prettifier for node.js_


## Notice

Currently under development/unreleased, not for use in production.


## Installation

Published as an npm module under the `@reactual` organization.

```bash
yarn add @reactual/c

# or via npm

npm install --save @reactual/c
```

## Usage
There are a few possible ways to use _`c`_ within a project:

### Import Directly As Needed

Import or require from `@reactual/c` in each file as needed. Since _`c`_ is a default export, you can use any variable name you prefer.

```js
/** ES6 imports */
import c from '@reactual/c'

/** or any var preferred */
import log from '@reactual/c'


/** ES5 require */
const c = require('@reactual/c')

/** or any var preferred */
const log = require('@reactual/c')

```
### Logging messages
Replace normal `console.log` statements with examples below.


```js
const total = 2 + 2

// console.log('The total is:', total

c('The total is:', total)
```

### Specifying a log level
_`c`_ will autodetect Node.js Errors, otherwise defaults to the `info` level. You can also force a log level by specifying a 3rd argument.


```js

const total = 2 + 2

/** level unspecified, defaults to info for non-errors **/
c('info unspecified example, total:', total)

/** info **/
c('info example, total:', total, 'i')

/** info **/
c('info, full word example, total:', total, 'info')

/** warn **/
c('warning example, total:', total, 'w')

/** error **/
c('error example, total:', total, 'e')

/** level unspecified, error value **/
c('error unspecified example, total:', new Error(total))

```

Valid values for log level, You can use the full name or abbreviation:

- `info` | `i`
- `warn` | `w`
- `error` | `e`
