import React from 'react';

const HelloWorld = ({ tech }) => {

    return (
        <div className="hello-world">
            Hello to <span class="hello-world__">{tech}</span>
        </div>
    );

};

export default HelloWorld;