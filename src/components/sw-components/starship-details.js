import React from 'react';
import ItemDetails,{Record} from '../item-details/item-details';
import {withSwapiService} from '../hoc-helper';

const  StarshipDetails= (props) =>{

    return (
        <ItemDetails {...props}>
            <Record field="model" label="Model"/>
            <Record field="crew" label="Crew"/>    
            <Record field="costInCredits" label="Cost"/>    
        </ItemDetails>
        );

};

const mapMethodsToProps= (swapiServices) =>{
    return {
        getData: swapiServices.getStarship,
        getImageUrl: swapiServices.getStarshipImage
    } 
}

export default withSwapiService(StarshipDetails, mapMethodsToProps);


;