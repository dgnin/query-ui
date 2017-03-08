# query-ui
A graphic manager for queries.

Take a look at the [demo](https://rawgit.com/davidgnin/query-ui/master/demo.html).

## Instance creation

`let output = queryUI(input)`

## Input (fields)

The `input` of the library is an Object with at least the mandatory keys `fields` and `container`.

* `fields` is an Object where every key is the name of a field and its value a definition of its type.
* `custom`: an String or Object with the type definition. When this is provided and `fields` don't, field name will be defined by the user and it will have always this type.
* `container` is the DOM Object inside which the GUI is built.
* `parseFunc` (optional) could be a Function which input is the query object and which output is the desired parsed query. Optionally it could be a simple String with the value `query-string` which activates the default parser. That's also what happens if nothing is provided.
* `id` (optional) for the generated GUI. Useful if you want to create CSS rules for a specific query-ui GUI.
* `operators` (optional) is an Array with the string representations of the operators available. If provided, it overrides the default one.

## Types

The built-in supported types are `number`, `float`, `string`, `date`, `time`, `datetime`, `timestamp` and `boolean`. Furthermore, there are two special types: `list` and `autocomplete`. To define a value with one of this types you have to do the following:

* `number`, `float`: an String with one of those values.
* `string`: an String with this value.
* `date`, `time`, `datetime` and `timestamp`: an String with one of those values.
* `list`: an Object with the following keys:
  * `type`: an String with the non-special type of values that are contained in the list.
  * `list`: an Array with the possible values. Independently of the type, you can always use the value `null`.
* `autocomplete`: an Object with the following keys:
  * `type`: an String with the non-special type of values that are expected from the `url`.
  * `url`: an String with the URL to call asynchronously.
  * `mainParam`: (optional) an String with the name of the param which will be filled by the user to make the autocomplete query (default is `term`).
  * `method`: (optional) an String with the method `GET` or `POST` (default is `GET`).
  * `otherParams`: (optional) an Object with the keys-value pairs describing other params for the call and its values.
  * `onSuccess`: a Function which input is the answer of the call and which output is an Array of length 1 or 2 which first position represents the real value to store and which second position, if provided, represents the value to show to the User.

## Operators

The built-in supported operators are `=`, `<`, `>`, `<=`, `>=`, `!=` and `like`.

## Output

An Object with the functions `query` and `parsed`. The first ones retrieves the query object and the second one generates the parsed output as defined by the `parseFunc` param of the input.
