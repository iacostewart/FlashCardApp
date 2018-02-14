import React from 'react';
import { Table, Button } from 'reactstrap';


const WorkoutTable = (props) => {

    return (
        <div>
            <h3>History</h3>
            <hr />
            <Table hover striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Result</th>
                        <th>Definition</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.workouts.map((workout, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{workout.id}</th>
                                    <td>{workout.result}</td>
                                    <td>{workout.def}</td>
                                    <td>{workout.description}</td>
                                    <td><Button id={workout.id} onClick={props.delete} color="danger">Delete</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default WorkoutTable;