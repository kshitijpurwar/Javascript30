# 1. Javascript DrumKit ( _drum_ )
### [Demo](https://www.kshitijpurwar.com/1.JavascriptDrumKit/)
---

This is a javascript Drumkit, just hit the keys and play the sound. There is a subtle effect on pressing keys which is powered by `transitionend` event not using `setTimeout` to remove the class.


## What I learnt
- `transitionend` event instead of setTimeout
- => function is ES6 without explicit return and `function` keyword
- key code and related JS events
- Using audio with JS ( `play`, `currentTime`)

Original Function
```
keys.forEach(function(key) {
  key.addEventListener('transitionend', removeEffect))
}
```

Let remove the function keyword
```
keys.forEach((key) {
  key.addEventListener('transitionend', removeEffect))
}  
```
Let remove the parenthesis around key as there is only 1
arguement
```
keys.forEach(key {
  key.addEventListener('transitionend', removeEffect))
}
```
Remove the curly braces and add an arrow
```
keys.forEach(key => key.addEventListener('transitionend', removeEffect))
```
---
:wrench: :nut_and_bolt: Created by  __[Kshitij Purwar](https://kshitijpurwar.com)__
