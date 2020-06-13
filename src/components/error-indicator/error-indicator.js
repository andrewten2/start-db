import React from 'react';

import icon from './boom.png'

const ErrorIndicator = () => {   
       return (
    <div className="error-indicator">
        
        <span className='boom'><img src={icon} alt='boom'></img>Boom!</span>
        <span>we have some problems</span>

    </div>
    );
};

export default ErrorIndicator;