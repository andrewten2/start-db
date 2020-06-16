import React from 'react';
import Itemlist from '../item-list';
import {withData, withSwapiService} from '../hoc-helper'
import SwapiServices from '../../services/swapi-services';

const swapiServices = new SwapiServices();

const {
    getAllPlanets,
    getAllStarship,
    getAllPeople
} = swapiServices;

const withChildFunction = (Wrapped,fn) => {
        return (props) => {
            return (
                <Wrapped {...props}>
                {fn}
                </Wrapped>
            )
      }
};

const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({name,model}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiServices) =>{
    return {
        getData : swapiServices.getAllPeople
    };
};

const mapPlanetMethodsToProps = (swapiServices) =>{
    return {
        getData : swapiServices.getAllPeople
    };
};

const mapStarshipMethodsToProps = (swapiServices) =>{
    return {
        getData : swapiServices.getAllPeople
    };
};

const PersonList = withSwapiService(
                    withData(
                        withChildFunction(Itemlist,renderName)),
                        mapPersonMethodsToProps);

const PlanetList = withSwapiService(
                     withData(
                        withChildFunction(Itemlist,renderName)),
                        mapPlanetMethodsToProps);                        
                        
const StarshipList = withSwapiService(
                     withData(
                        withChildFunction(Itemlist,renderName)),
                        mapStarshipMethodsToProps);    



export {
    PersonList,
    PlanetList,
    StarshipList
}