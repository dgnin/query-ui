# query-ui
A graphic manager for queries.

## Initial call

`let output = queryUI(input)`

## Input (fields)

The `input` of the library is an Object with at least the mandatory `fields` and `container` keys.

* `fields` is an Object where every key is the name of a field and its value a definition of its type.
* `container` is the DOM Object inside which the GUI is built.
* `parseFunc` (optional) could be a Function which input is the query object and which output is the desired parsed query. Optionally it could be a simple String with the value `querystring` which activates the default parser. That's also what happens if nothing is provided.

## Types

The built-in supported types are `number`, `string`, `date`, `time`, `datetime`, `timestamp`, `list` and `autocomplete`. To define a value with one of this types you have to do the following:

* `number`: an String with this value.
* `string`: an String with this value.
* `date`, `time`, `datetime` and `timestamp`: an String with one of those values.
* `list`: an Array with the values of the list.
* `autocomplete`: an Object with the keys `url`, `method`, `mainParam`, `otherParams` and `callback`.
  * `url`: an String with the URL to call asynchronously.
  * `type`: (optional) an String with the method `GET` or `POST` (default is `GET`).
  * `mainParam`: an String with the name of the param which will be filled by the user to make the autocomplete query.
  * `otherParams`: an Object with the keys-value pairs describing other params for the call and its values.
  * `callback`: a Function which input is the answer of the call and which output is an Array of length 1 or 2 which first position represents the real value to store and which second position, if provided, represents the value to show to the User.

## Operators

The built-in supported operators are `=`, `<`, `>`, `<=`, `>=`, `!=`, `LIKE`, `IN` and `NOT IN`.

## Output

An Object with the functions `query` and `parsed`. The first ones retrieves the query object and the second one generates the parsed output as defined by the `parseFunc` param of the input.
