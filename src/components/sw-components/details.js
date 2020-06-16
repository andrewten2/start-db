import React from 'react';
import ItemDetails,{Record} from '../item-details/item-details';
import {SwapiServicesConsumer} from '../swapi-service-context';

const PersonDetails = ({itemId}) =>{
    return (
        <SwapiServicesConsumer>
            {
                ({ getPerson,getPersonImage })=> {
                    return (
                        <ItemDetails itemId={itemId}
                            getData={getPerson}
                            getImageUrl={getPersonImage}>
                            <Record field="gender" label="Gender"/>
                            <Record field="eyeColor" label="Eye Color"/>
                        </ItemDetails>
                    );
                }
            }
        </SwapiServicesConsumer>
    );
};


const PlanetDetails = ({itemId}) =>{
    return (
        <SwapiServicesConsumer>
        {
            ({getPlanet,getPlanetImage})=>{
                return(
                    <ItemDetails itemId={itemId}
                        getData={getPlanet}
                        getImageUrl={getPlanetImage}>
                        <Record field="population" label="Population"/>              
                    </ItemDetails>
                );
            }
        }
        </SwapiServicesConsumer>
    );
};

const  StarshipDetails= ({itemId}) =>{
    return (
        <SwapiServicesConsumer>
            {
                ({getStarship,getStarshipImage})=>{
                return (
                    <ItemDetails itemId={itemId}
                        getData={getStarship}
                        getImageUrl={getStarshipImage}>
                        <Record field="model" label="Model"/>
                        <Record field="crew" label="Crew"/>    
                        <Record field="costInCredits" label="Cost"/>    
                    </ItemDetails>
                    );
                }
            }
        </SwapiServicesConsumer>
    );

};



export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}