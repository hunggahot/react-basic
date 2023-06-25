import React from "react";
import ChildComponent from './ChildComponent';

class FormComponent extends React.Component {

    // key: value
    state = {
        firstName: '',
        lastName: ''
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(">>> check data input: ", this.state)
    }

    //re-render
    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={this.handleChangeFirstName}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={this.handleChangeLastName}
                    />
                    <br />
                    <input type="submit" value="Submit"
                        onClick={this.handleSubmit}
                    />
                </form>

                <ChildComponent
                    name={'Hung'}
                    age={'22'}

                />

            </>
        )
    }
}

export default FormComponent