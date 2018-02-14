import React from 'react';

class WorkoutIndex extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            workouts: []
        }

        this.fetchWorkouts = this.fetchWorkouts.bind(this)
    }

    componentWillMount(){
        this.fetchWorkouts()
    }

    fetchWorkouts(){
        fetch("http://localhost:3000/api/log", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
              })
        })
        .then((res) => res.json())
        .then((logData) => {
            return this.setState({workouts: logData})
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                Workouts work
            </div>
        )
    }
}

export default WorkoutIndex