# How useState works in React

This project is partly interactive and partly text with code examples. Specifically, it wants to answer:

- **useState:** how does a state variable get updated?
- **Rendering:** what does it mean to re-render a component?

The example is a counter component which increases the `count` by 1. Every time you click a button there’s a
moment where the counter did not yet update its count. That’s because React is waiting for the browser,
specifically the event loop of JavaScript's runtime, to say *"all right, you can update the UI now"* and then
React goes ahead and re-runs the entire counter component from top to bottom but with the updated value count.

## Running Locally

1. Install dependencies:

```sh
pnpm install
```

2. Start the dev server:

```sh
pnpm dev
```
