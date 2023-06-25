import React from "react";

class AddComponent extends React.Component {

    state = {
        titleJob: '',
        salary: '',
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            titleJob: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(">>> check data input: ", this.state)
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job's Title:</label><br />
                <input
                    type="text"
                    value={this.state.titleJob}
                    onChange={this.handleChangeTitleJob}
                />
                <br />
                <label htmlFor="lname">Salary:</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={this.handleChangeSalary}
                />
                <br />
                <input type="submit" value="Submit"
                    onClick={this.handleSubmit}
                />
            </form>
        )
    }
}

export default AddComponent