// Liskov substitution principle

class Person {

}

class Member extends Person {
    access() {
        console.log('У тебя есть доступ')
    }
}

class Guest extends Person {
    isGuest = true
}

class Frontend extends Member {
    canCreateFrontend() {}
}

class Backend extends Member {
    canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest {
    access() {
        throw new Error('иди ...')
    }
}

function openSecretDoor(member) {
    member.access()
}

openSecretDoor(new Frontend)
openSecretDoor(new Backend)

// ====================================================================

class Component {
    isComponent = true
}

class ComponentWithTemplate extends Component {
    render() {
        return  `<div>Component</div>`
    }
}

class HighterOrderComponent extends Component {

}

class HeaderComponent extends ComponentWithTemplate {
    onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
    afterInit() {}
}

class HOC extends HighterOrderComponent {
    render() {
        throw new Error('Render is impossible here')
    }
    wrapComponent(component) {
        component.wrapped = true
        return component
    }
}

function renderComponent(component) {
    console.log(component.render())
}

renderComponent(new HeaderComponent)
renderComponent(new FooterComponent)