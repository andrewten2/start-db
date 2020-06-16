import React from 'react';

const {Provider : SwapiServiceProvider, Consumer: SwapiServicesConsumer} = React.createContext();

export{
    SwapiServiceProvider,
    SwapiServicesConsumer    
};