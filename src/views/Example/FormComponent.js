import React from "react";
import ChildComponent from './ChildComponent';

class FormComponent extends React.Component {

    // key: value
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            {
                id: 'abcJob1',
                title: 'Developers',
                salary: 500
            },

            {
                id: 'abcJob2',
                title: 'Testers',
                salary: 400
            },

            {
                id: 'abcJob3',
                title: 'Project Managers',
                salary: 1000
            },
        ]
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
                    name={this.state.firstName}
                    age={'22'}
                    address={'Ho Chi Minh'}
                    arrJobs={this.state.arrJobs}
                />

            </>
        )
    }
}

export default FormComponent