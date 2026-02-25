function customRender(reactElement, container) {
    /*
        //create DOM element
        const domElement = document.createElement(reactElement.type)//here it's empty container
        domElement.innerHTML = reactElement.children //add children
        domElement.setAttribute('href', reactElement.props.href) //set elements
        domElement.setAttribute('target', reactElement.props.target)
        container.appendChild(domElement)//
        */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const props in reactElement.props) {
        if (props === 'children') continue;
        domElement.setAttribute(props, reactElement.props[props])

    } 
    container.appendChild(domElement)

}

const reactElement = {
    type: 'a',
    props: {//it's object 
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)



