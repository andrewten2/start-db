import React from 'react';
import ItemDetails,{Record} from '../item-details/item-details';
import {withSwapiService} from '../hoc-helper';

const PlanetDetails = (props) =>{
    return(
        <ItemDetails {...props}>
            <Record field="population" label="Population"/>              
        </ItemDetails>
    );    
};


const mapMethodsToProps= (swapiServices) =>{
    return {
        getData: swapiServices.getPlanet,
        getImageUrl: swapiServices.getPlanetImage
    } 
}


export default withSwapiService(PlanetDetails, mapMethodsToProps);