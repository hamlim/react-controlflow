# React-controlflow

A simple switch-case react package.

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

TL;DR: Get those iife switch statements out of your React!