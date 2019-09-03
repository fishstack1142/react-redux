import React from 'react';

const HelloWorld = ({ tech }) => {

    return (
        <div className="hello-world">
            Hello to <span className="hello-world__">{tech}</span>
        </div>
    );

};

export default HelloWorld;