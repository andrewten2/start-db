import React from 'react';
import ItemDetails,{Record} from '../item-details/item-details';
import {withSwapiService} from '../hoc-helper';


const PersonDetails = (props) =>{
    return (
      <ItemDetails {...props}>
                    <Record field="gender" label="Gender"/>
                    <Record field="birthYear" label="Birth Year"/>
                    <Record field="height" label="Height"/>
                    <Record field="hairColor" label="Hair Color"/>
                </ItemDetails>
    );
};


const mapMethodsToProps= (swapiServices) =>{
    return {
        getData: swapiServices.getPerson,
        getImageUrl: swapiServices.getPersonImage
    } 
}

export default withSwapiService(mapMethodsToProps)(PersonDetails);