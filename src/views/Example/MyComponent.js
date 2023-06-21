import React from "react";

class MyComponent extends React.Component {

    //key:value
    state = {
        name: 'Hung',
        username: 'lamhungw'
    }

    /*
    JSX => return block
    Fragment
    */

    handlerOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handlerClickButton = () => {
        console.log('hit the button')
        alert('click me')
    }

    render() {
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handlerOnChangeName(event)}
                    />
                    Hello friend {this.state.name}
                </div>
                <div className="second">
                    My Username: {this.state['username']}
                </div>
                <div className="third">
                    <button onClick={() => this.handlerClickButton()}>Click me</button>
                </div>
            </>

        )
    }

}

export default MyComponent;