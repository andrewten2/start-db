import React from 'react';

const TogleRandom = ({OnRandom}) => {   
       return (
        <div className="randon-button">
        <button onClick ={OnRandom} type="button" className="btn btn-success">reload</button>
      </div>
    );
};

export default TogleRandom;