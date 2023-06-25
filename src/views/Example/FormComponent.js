import React from "react";
import ChildComponent from './ChildComponent';
import AddComponent from "./AddComponent";

class FormComponent extends React.Component {

    // key: value
    state = {
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

    addNewJob = (job) => {
        console.log('check job from parent: ', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    //re-render
    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />

            </>
        )
    }
}

export default FormComponent