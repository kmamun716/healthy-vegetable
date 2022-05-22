import React from 'react';

const UseStateDetails = () => {
    return (
        <div>
            <h3>How Use State Works?!!</h3>
            <p>
                useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value and another function to update this value.
                React Hooks are functions that add state variables to functional components and instrument the lifecycle methods of classes. They tend to start with use.
                As stated previously, useState enables you to add state to function components. Calling React.useState inside a function component generates a single piece of state associated with that component.
            </p>
        </div>
    );
};

export default UseStateDetails;