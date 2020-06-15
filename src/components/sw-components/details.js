import React from 'react';
import ItemDetails,{Record} from '../item-details/item-details';
import SwapiServices from '../../services/swapi-services';

const swapiServices = new SwapiServices();

const {
    getPerson,
    getStarship,
    getPlanet,
    getPersonImage,
    getStarshipImage,
    getPlanetImage
} = swapiServices;

const PersonDetails = ({itemId}) =>{
    return (
        <ItemDetails itemId={itemId}
                    getData={getPerson}
                    getImageUrl={getPersonImage}>
              <Record field="gender" label="Gender"/>
              <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
    );
};


const PlanetDetails = ({itemId}) =>{
    return (
        <ItemDetails itemId={itemId}
                     getData={getPlanet}
                     getImageUrl={getPlanetImage}>
              <Record field="population" label="Population"/>              
      </ItemDetails>
    );
};

const  StarshipDetails= ({itemId}) =>{
    return (
        <ItemDetails itemId={itemId}
                     getData={getStarship}
                    getImageUrl={getStarshipImage}>
                    <Record field="model" label="Model"/>
                    <Record field="crew" label="Crew"/>    
                    <Record field="costInCredits" label="Cost"/>    
      </ItemDetails>
    );

};



export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}