import React from 'react';
import { Table, Button } from 'reactstrap';


const WorkoutTable = (props) => {

    return (
        <div>
            <h3>mixed bag</h3>
            <hr />
            <Table hover striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>decknametype</th>
                        <th>Question</th>
                        <th>Profetic Answer</th>
                        <th>Non belivers click below</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.workouts.map((workout, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{workout.id}</th>
                                    <td>{workout.decknametype}</td>
                                    <td>{workout.question}</td>
                                    <td>{workout.answer}</td>
                                    <td><Button id={workout.id} onClick={props.delete}  color="danger">Delete</Button></td>
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