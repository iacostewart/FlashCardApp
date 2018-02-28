import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
    background-color: blue;
    z-index: -100;
  
`;

const Stretcher = styled.div`
    height: 100em;
    width: 100em;
    z-index: -100;
`;



class MainBody extends Component {

    render() {
        return(
            <Wrapper>
                <Stretcher>
                    <div>
                    <h1>Hello does this work</h1>
                    </div>                
                </Stretcher>
            </Wrapper>    
        ) 
    }}


    export default MainBody;