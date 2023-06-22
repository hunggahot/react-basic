import React from "react";

class MyComponent extends React.Component {

    //key:value
    state = {
        name: '',
        username: 'lamhungw'
    }

    /*
    JSX => return block
    Fragment
    */

    handlerOnChangeName = (event) => {
        // this.state.name = event.target.value; //bad code
        // console.log(event.target.value, 'event target: ', event.target, 'event object:', event)
        this.setState({
            name: event.target.value,
        })
    }

    handlerClickButton = () => {
        alert('click me')
    }

    render() {
        console.log('>>> call render: ', this.state)
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