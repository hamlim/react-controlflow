# React-controlflow

A simple switch-case react package for managing control flow, it acts a bit like React-Router's Switch component,
but has several use cases outside of just rendering.

```Javasvript
<Switch on={condition}>
  <Case condition={maybeMatchesCondition}>
    <h1>I match</h1>
  </Case>
  <Case condition={alsoMaybeMatchesCondition}>
    <h1>No, I match</h1>
  </Case>
  <Default>
    <h1>Oh no, nothing matched!
  </Default>
</Switch>
```

The current syntax for something like this could look like this:

```Javascript
render() {
  return (
    <div>
      {(() => {
        switch (condition) {
          case maybeMatchesCondition:
            return <h1>I match</h1>;
          case alsoMaybeMatchesCondition:
            return <h1>No, I match</h1>;
          default:
            return <h1>Oh no, nothing matched!</h1>;
        }
      })()}
    </div>
  )
}
```