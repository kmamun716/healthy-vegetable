import React from 'react';

const ReactDetails = () => {
    return (
        <div className='my-5'>
            <h3>How React Works??</h3>
            <p>
                React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.
                A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. React is not a framework. It is just a library developed by Facebook to solve some problems that we were facing earlier.
            </p>
        </div>
    );
};

export default ReactDetails;