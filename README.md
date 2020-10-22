# Assignment: Badge with Tooltip

![Assignment](assignment.png)

## Getting started
This project is pre-configured to get you started quickly; running
```
npm install
npm run dev
```
should open a browser on http://localhost:8080 that shows a playground.

## Notes
The project did not run on IE11 in its vanilla/post-fork state. I am not sure if this was intended but I assumed it wasn't and I continued with building the badge itself.

### Badge
In regards to the badge, I added one more test in case the text exceeds the width and a tooltip should be shown as well.

There is also a known minor styling bug with the badge: when there is no tooltip icon the badge becomes shorter due to the icon height being bigger than the text. This could be fixed by giving the text a fixed height that is the same as the icon but that would imply using another magic number (21px). If we used css variables it would have made more sense but I decided to leave it as it is for now.

### Svg icon
In regards to the svg icon, the ".svg" file can be deleted since it's now a react component but I am not sure if that is allowed.
There are a few alternatives:
- Would it be possible to load it with SVGR instead? 13kb unpacked bundle size
- Dynamically importing the svg icons is also an option although overkill for this
- A ligthweight hack would be to use <img> with a mask and have the wrapper use the parent's background color (if it's NECESSARY to use <img> - load the image separately from the HTML)

### Tap expiry bug
There is currently a hard to reproduce bug where the tooltip does not disappear after 10 seconds. I tried debugging it but unluckily I have not managed to reproduce it with logs or debuggers running. I will think of a different way to approach the tap expiry as I assume this is either a state problem or a "clearTimeout" problem.

On the current version it doesn't seem to happen anymore

## Instructions
- please fork this repository and do regular commit's so Crobox can see your thinking / development progress.
- the assignment is to implement a Badge with a tooltip; See the image as example.
- this badge is configurable, and the props are already passed in.
- the provided `preact` and `goober` libraries should be used to create this component.
- the file that contains the badge implementation is [here](src/badge/index.js).
- the icon can be found in the `public/img` folder and is allowed to be embedded directly.
- if you are finished, stuck or it takes you more than 4 hours please let your contact at Crobox know.

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
- the icon background color must follow badge text color
- badge width should scale with content (with a max width of the parent).
- when content exceeds badge width, ellipsis (…) should be applied.
- tooltip width should scale with content (with a max width of 240px)
- when the tooltip is tapped, it should disappear again after 10 seconds
- the assignment should work on all modern browsers (including mobile) and gracefully on IE11
- project should compile on Linux

