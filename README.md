# map-of-sets

## Install

```
$ npm install @shaharmor/map-of-sets
```


## Usage

```ts
import {MapOfSets} from '@shaharmor/map-of-sets';

const mapOfSets = new MapOfSets<string, string>();
mapOfSets.add('key1', 'value1');
mapOfSets.has('key1', 'value1'); // true
mapOfSets.has('key1', 'value2'); // false
mapOfSets.toArray('key1'); // ['value1']
```

## API

### MapOfSets<A, B>()

Returns a new `MapOfSets` instance, where the type of the maps keys is `A`, and the type of the sets values is `B`.

#### .add(key, value)

Adds the value `value` to the `Set` with the specific key `key`.

#### .has(key, value)

Returns `true` if `value` exists in the `Set` with the specific key `key`, `false` otherwise.

#### .delete(key, value)

Deletes the value `value` from the `Set` with the specific key `key`.

#### .toArray(key)

Returns an array of all values from the `Set` with the specific key `key`.
