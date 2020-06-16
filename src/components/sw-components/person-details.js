import React from 'react';
import ItemDetails,{Record} from '../item-details/item-details';
import {withSwapiService} from '../hoc-helper';


const PersonDetails = (props) =>{
    return (
      <ItemDetails {...props}>
                    <Record field="gender" label="Gender"/>
                    <Record field="eyeColor" label="Eye Color"/>
                </ItemDetails>
    );
};


const mapMethodsToProps= (swapiServices) =>{
    return {
        getData: swapiServices.getPerson,
        getImageUrl: swapiServices.getPersonImage
    } 
}

export default withSwapiService(PersonDetails, mapMethodsToProps);