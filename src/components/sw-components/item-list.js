import React from 'react';
import Itemlist from '../item-list';
import {withData, withSwapiService} from '../hoc-helper'

const withChildFunction = (fn) => (Wrapped) => {
        return (props) => {
            return (
                <Wrapped {...props}>
                {fn}
                </Wrapped>
            )
      }
};

const renderName = ({name}) => <span>{name}</span>;


const mapPersonMethodsToProps = (swapiServices) =>{
    return {
        getData : swapiServices.getAllPeople
    };
};

const mapPlanetMethodsToProps = (swapiServices) =>{
    return {
        getData : swapiServices.getAllPlanets
    };
};

const mapStarshipMethodsToProps = (swapiServices) =>{
    return {
        getData : swapiServices.getAllStarship
    };
};

const PersonList = withSwapiService(mapPersonMethodsToProps)(
                    withData(
                        withChildFunction(renderName)
                        (Itemlist)));
                        

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
                    withData(
                        withChildFunction(renderName)
                        (Itemlist)));                        
                        
const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
                     withData(
                        withChildFunction(renderName)
                        (Itemlist)));    



export {
    PersonList,
    PlanetList,
    StarshipList
}