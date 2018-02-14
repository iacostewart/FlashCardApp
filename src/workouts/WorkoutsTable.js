import React from 'react';
import { Table } from 'reactstrap';


const WorkoutTable = (props) => {
    return (
        <div>
            <h3>History</h3>
            <hr />
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Result</th>
                        <th>Definition</th>
                        <th>Description</th>
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