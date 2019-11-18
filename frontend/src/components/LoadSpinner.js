import React from 'react';
import spinner from './spinner.gif';
import styled from 'styled-components';

const SpinnerStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


const LoadSpinner = () => {
    return (
        <>
            <SpinnerStyle>
                <img src={spinner} alt="loading spinner"/>
            </SpinnerStyle>
        </>
    )
}


export default LoadSpinner;