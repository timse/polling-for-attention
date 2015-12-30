
# Polling for attention

Polls a given condition till its true or times out.
Resolves or rejects based on condition being successfully being resolved or not.

# how do i use it?

As `polling-for-attention` is UMD you can either require it or load it directly into your browser

## require/import

```javascript
import poll from 'polling-for-attention';

poll(function someFunction(){/*...*/}).then(resolve, reject).catch(onPeng);
```

## global in browser

```javascript
<script src="some/path/to/pfa.js"></script>
<script>
poll(function someFunction(){/*...*/}).then(resolve, reject).catch(onPeng);
</script>
```

# options

Next to the first paramter `condition` which has to be a function that returns a boolean (booleanish) value you can specify `interval` and `timeout`

## `interval`

the second param is by default `20` which means `20 milliseconds` and states how often the condition is called in order to check if the condition is true by now. 

## timeout

the third parameter `timeout` specifies when the polling stops checking for a truthy value. By default this is set to `20 seconds` or `20000 milliseconds`.

If you want to polling to be infinite either pass `Infinity` or a falsy value like `0`, `false` or `null` (*`undefined`* wont work).
