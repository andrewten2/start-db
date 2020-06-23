import React from 'react';
import {SwapiServicesConsumer} from '../swapi-service-context';

const withSwapiService = (mapMethodsToProps) => (Wrapped) => {
    return(props) => {
        return (
        <SwapiServicesConsumer>
            {
            (swapiServices) => { 
                const serviceProps = mapMethodsToProps(swapiServices);
                return(
                    <Wrapped {...props} {...serviceProps} />
                );}
            }
        </SwapiServicesConsumer>
        );
    }

};

export default withSwapiService;