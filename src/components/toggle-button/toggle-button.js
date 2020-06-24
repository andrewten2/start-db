import React from 'react';

const TogleRandom = ({OnRandom}) => {   
       return (
        <div className="random-button ">
        <button onClick ={OnRandom} type="button" className="btn btn-success mr-0">reload</button>
      </div>
    );
};

export default TogleRandom;