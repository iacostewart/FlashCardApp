import React from 'react';
import WorkoutIndex from '../workouts/WorkoutIndex';
import styled from 'styled-components';


const Main = styled.div`
    background-color: pink;
    padding: 5em;
    border: 2em;
    margin: 5em;
`;

class Splash extends React.Component{


    
    render(){
        return (
            <div className="main">
               <Main className="mainDiv">
                      
                  <div>


                       <div>
                           <WorkoutIndex token={this.props.sessionToken}/>
                       </div>
            
                  </div>
               </Main>
            </div>
        )
    }
}

export default Splash;


<div>
    <div>
        <div>

        </div>
    </div>
</div>