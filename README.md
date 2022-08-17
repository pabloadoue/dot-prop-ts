# ts-dot-prop

> Get, set, or delete a property from a nested object using a dot path

This package is heavily inspired on the [dot-prop](https://github.com/sindresorhus/dot-prop) package developed by [Sindre Sorhus](https://github.com/sindresorhus) and has been refactored to typescript so that it can be installed and used without converting your project to ESM module [(see issue)](https://github.com/sindresorhus/dot-prop/issues/97).

## Install
Using NPM
```sh
npm install ts-dot-prop
```

Using yarn
```sh
yarn add ts-dot-prop
```

## getProperty

```js
import {getProperty} from 'ts-dot-prop';

// Getter
getProperty({foo: {bar: 'unicorn'}}, 'foo.bar');
//=> 'unicorn'

getProperty({foo: {bar: 'a'}}, 'foo.notDefined.deep');
//=> null

getProperty({foo: {bar: 'a'}}, 'foo.notDefined.deep', 'default value');
//=> 'default value'

getProperty({foo: {'dot.dot': 'unicorn'}}, 'foo.dot\\.dot');
//=> 'unicorn'

getProperty({foo: [{bar: 'unicorn'}]}, 'foo.0.bar');
//=> 'unicorn'

```

## setProperty

```js
import {setProperty} from 'ts-dot-prop';

const object = {foo: {bar: 'a'}};
setProperty(object, 'foo.bar', 'b');
//=> {foo: {bar: 'b'}}

const foo = setProperty({}, 'foo.bar', 'c');
//=> {foo: {bar: 'c'}}

setProperty(object, 'foo.baz', 'x');
//=> {foo: {bar: 'b', baz: 'x'}}

setProperty(object, 'foo.biz[0]', 'a');
//=> {foo: {bar: 'b', baz: 'x', biz: ['a']}}

```

## hasProperty

```js
import {hasProperty} from 'ts-dot-prop';

const object = {foo: {bar: 'a'}};
hasProperty(object, 'foo.bar');
//=> true

hasProperty(object, 'foo.goo');
//=> false

```

## deleteProperty

```js
import {deleteProperty} from 'ts-dot-prop';

const object = {foo: {bar: 'a'}};
deleteProperty(object, 'foo.bar');
//=> {foo:{}}

const object = {foo: {bar: 'a'}};
deleteProperty(object, 'foo');
//=> {}

```
