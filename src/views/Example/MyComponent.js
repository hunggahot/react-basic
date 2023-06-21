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
            </>

        )
    }

}

export default MyComponent;