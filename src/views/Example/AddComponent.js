import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params')
            return;
        }

        console.log(">>> check data input: ", this.state)

        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <form>
                <label>Job's Title:</label><br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={this.handleChangeTitleJob}
                />
                <br />
                <label>Salary:</label><br />
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