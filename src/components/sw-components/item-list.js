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


const PersonList = withData(Itemlist,getAllPeople);


const PlanetList = withData(Itemlist,getAllPlanets);


const StarshipList = withData(Itemlist,getAllStarship);

export {
    PersonList,
    PlanetList,
    StarshipList
}