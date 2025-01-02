## Notes
- React expects a particular syntax to be used by `createRoot.render()` method. We simply cannot pass a self-created React Element (Object with props) to this renderer and expect an output.
- Instead we created a Custom render method called `customRender()` and added the React element with it's properties to the main root node.
- `{username}` This is an evaluated expression. This can only include final evaluated values and cannot include any if-else, loops etc.

## How to make a Custom React element
```js 
const reactElement = React.createElement(
  'a', //  tag
  {href: "https://google.com", target: "_blank"}, // props
  'Click me to visit Google'  // Value
)
```

## Evaluated Expression
```js
function App(){
    const username = "username"
    return (
        <>
            <p>The username is {username}</p>   
            {/*This is an evaluated expression
            This can only include final evaluated values 
            and cannot include any if-else, loops etc.*/}
        </>
    )
}
```
## index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom React App</title>
</head>
<body>
    <div id="root"></div>
    <script src="./custom_react.js"></script>
</body>
</html>
```
## index.js
```js
// Need to render <a> tag
const reactElement = {
    // React tries to build a tree
    type: 'a',   // 'div','p','input' etc.
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: 'Click Me to visit Google.com'
}

const mainContainer = document.querySelector("#root")

// render method - adding reactElement to the mainContainer
function customRender(reactElement, mainContainer){
    const domElement = document.createElement(reactElement.type)    // create <a> type element
    domElement.innerHTML = reactElement.children // Add the value content
    domElement.setAttribute('href', reactElement.props.href) // add the attributes 
    domElement.setAttribute('target', reactElement.props.target) // add the attributes 
    mainContainer.appendChild(domElement)   // append the element to mainContainer
}

function customRenderWithLoop(reactElement, mainContainer){
    const domElement = document.createElement(reactElement.type)    // create <a> type element
    domElement.innerHTML = reactElement.children // Add the value content
    const props = reactElement.props
    for (const prop in props) {
        if (prop == 'children')   // safety if-case prop contains any children
            continue;
        domElement.setAttribute(prop, reactElement.props[prop]);   // Add attributes using loop
    }
    mainContainer.appendChild(domElement)   // append the element to mainContainer
}
// customRender(reactElement, mainContainer)
customRenderWithLoop(reactElement, mainContainer)
```