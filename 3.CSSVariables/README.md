# Playing with CSS variables and image filters with Javascript ( _cssv_ )
### [Demo](https://www.kshitijpurwar.com/3.CSSVariable/)

## What I leaned
- CSS Variables, the are scoped so can be defined for body or a particular div. Advantage over sass variables is that they can be dynamically changed using Javascript.

```
:root{
  --paddingWidth: 200px;
}
div{
  padding: var(--paddingWidth);
}
```
- How to change CSS variables with JS

```
document.documentElement.style.setProperty("--blur", 0 + "px")

```
---
:wrench: :nut_and_bolt: Created by  __[Kshitij Purwar](https://kshitijpurwar.com)__ with :heart:
