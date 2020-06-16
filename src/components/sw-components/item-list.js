import React from 'react';
import Itemlist from '../item-list';
import {withData} from '../hoc-helper'
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



const PersonList = withData(
                        withChildFunction(Itemlist,renderName),
                        getAllPeople);
const PlanetList = withData
                        (withChildFunction(Itemlist,renderName),
                        getAllPlanets);
const StarshipList = withData(
                        withChildFunction(Itemlist,renderModelAndName),
                        getAllStarship);

export {
    PersonList,
    PlanetList,
    StarshipList
}