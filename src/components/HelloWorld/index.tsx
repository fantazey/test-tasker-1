import React from 'react';

const HelloWorld = () => (
    <>
        <h1>Hello World</h1>
        <hr/>
        <h3>Test react/ts application</h3>
        <div>{process.env.NAME}</div>
        <div>{process.env.VERSION}</div>
    </>
);

export default HelloWorld