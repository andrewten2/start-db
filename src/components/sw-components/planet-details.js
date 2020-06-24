import React from 'react';
import ItemDetails,{Record} from '../item-details/item-details';
import {withSwapiService} from '../hoc-helper';

const PlanetDetails = (props) =>{
    return(
        <ItemDetails {...props}>
            <Record field="population" label="Population"/>              
            <Record field="rotationPeriod" label="Rotation Period"/>              
            <Record field="diameter" label="Diameter"/>              
            <Record field="orbitalPeriod" label="Orbital Period"/>              
            <Record field="surfaceWater" label="Surface Water"/>              
            <Record field="climate" label="Climate"/>              
        </ItemDetails>
    );    
};


const mapMethodsToProps= (swapiServices) =>{
    return {
        getData: swapiServices.getPlanet,
        getImageUrl: swapiServices.getPlanetImage
    } 
}


export default withSwapiService(mapMethodsToProps)(PlanetDetails);