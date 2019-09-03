import React from 'react';
import { store } from './store';
import { setNumber } from './actions/index2';

const Button2 = () => (

    <div>
        <button
            data-tech={2}
            onClick={dispatchBtnAction}
        >
        2
        </button>
    </div>

);

function dispatchBtnAction(e) {
         const tech = e.target.dataset.tech;
        store.dispatch(setNumber(2));
}

export default Button2;