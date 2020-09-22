# Assignment: Badge with Tooltip

![Assignment](assignment.png)

## Getting started
This project is pre-configured to get you started quickly

```
npm install
npm run dev
```
Should open a browser on http://localhost:8080 that shows a playground.

## Instructions
- The assignment is to implement a Badge with a tooltip. See the image as example
- This badge is configurable, and the props are already passed in.
- the provided `preact` and `goober` libraries should be used to create this component.
- there is [only file](src/badge/index.js) that requires implementation


## Configurable props
- badge text content
- badge text color
- badge background color
- tooltip text content

## Intended behavior
- hover/tap on icon activates tooltip
- badge appears using opacity fade-in

## Requirements
- icon only visible when tooltip text is available
- icon background color must follow badge text color
- badge width should scale with content (with a max width of the parent).
- when content exceeds badge width, ellipsis (…) should be applied.
- tooltip width should scale with content (with a max width of 240)
- when tooltip
