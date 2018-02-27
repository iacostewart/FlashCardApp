import React, { Component } from 'react';
import styled from 'styled-components';



const Wrapper = styled.section`
background-color: pink;
width: 50%;

border: 1px solid black;`


const Title = styled.h1`
color: blue;`;







class UserSplash extends Component {
    constructor(props){
        super(props);
        console.log("user splash props", props);     // this returned the session token.. hmmm 
    }
componentWillMount() {
console.log('component will mount')
}
componentDidMount() {
    console.log('component Did mount')
}

    render () {
        console.log("render")
        
        return(
            <Wrapper>
            <div className="main">
                <div className="mainDiv">
                    <Title>User logged in Splash page...</Title>
                    <h4>Future home of cumostized user by user exerineces..</h4>
                    <br/>
                    <br/>
                    <br/>
                    <p>But for now your going to be forced to use your imagination... but not too much... the lower your
                        expectations... the better this will look in the beganning end.. </p>
                    
                </div>
            
            </div>
            </Wrapper>
        )
    }
}

export default UserSplash;
