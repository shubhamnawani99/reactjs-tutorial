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