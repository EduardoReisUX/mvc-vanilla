# MVC Vanilla JS

Writing a scallabe and testable web applicaton with only JavaScript following only MVC architecture with TDD methodology. After that it was done, the project was modified to use TypeScript alongside Vite as bundler tool.

## Learnings

### MVC architecture

### replaceChildren and insertAdjacentHTML

A very convenient to write into the HTML with javascript is with the use of `replaceChildren` and `insertAdjacentHTML` methods!

Calling `document.replaceChildren()` will empty a document of all its children. It is used in `this.elements.tableBody?.replaceChildren()`, where it will clear all `tableBody` children. 

Afterwards, the method `insertAdjacentHTML("afterbegin", markup)` is called. It will get a markup string to be parsed as HTML or XML and insert into the DOM tree. Just inside the element, before its first child.

### target.closest

### Event Delegation Pattern

### Instance of target

### BEM CSS

It's a common saying that one of the most difficult tasks in development is naming anything (and cache invalidation).

BEM has been created by some Russians guys to tackle this naming problem in CSS styles. It is a pattern to name styles. BEM stands for: **Block**, **Element** and **Modifier**.

A block is basically a component or module. An element belongs to a block, it is his child. The modifier is used to... modify the block or the element.

BEM in CSS has this structure: `.[Block]__[Element]--[Modifier]`

```html
<ul class="menu">
  <div class="menu__item">
    <a href="#" class="menu__link">Item</a>
  </div>

  <div class="menu__item">
    <a href="#" class="menu__link menu__link--disabled">Outro item</a>
  </div>

  <div class="menu__item">
    <a href="#" class="menu__link">E mais um</a>
  </div>
</ul>
```

```css
.c-menu {}

.c-menu__item {}

.c-menu__link {}

.c-menu__link--disabled {}
```

## Links 

- [Writing a TodoMVC App With Modern Vanilla JavaScript](https://frontendmasters.com/blog/vanilla-javascript-todomvc/)
- [How to Test LocalStorage with Vitest](https://runthatline.com/vitest-mock-localstorage/)
- [Construindo um simples projeto MVC do zero com JavaScript](https://www.isarubim.com/posts/construindo-um-simples-projeto-mvc-do-zero-com-javascript)
- [Binding Event Listeners to Dynamically Created Elements in JavaScript](https://medium.com/@yurchenkor33/binding-event-listeners-to-dynamically-created-elements-in-javascript-a2e30d156b8e)
- [Why is Event.target not Element in Typescript?](https://stackoverflow.com/questions/28900077/why-is-event-target-not-element-in-typescript)
- [Document: replaceChildren() method](https://developer.mozilla.org/en-US/docs/Web/API/Document/replaceChildren)
- [Element: insertAdjacentHTML() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)