import React,{Component} from 'react';
import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorButton from '../error-button/error-button';
import SwapiServices from '../../services/swapi-services';
import ErrorIndicator from '../error-indicator';
import Row from '../row'

import './app.css'
import PeoplePage from '../people-page/people-page';
import ItemDetails,{Record} from '../item-details/item-details';
import Itemlist from '../item-list';

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components'
export default class App extends Component {  

  swapiServices = new SwapiServices();

  state = {
    showRandomPlanet: true,
    butClass : true,
    hasError: false,
    selectedPerson :5
  };


  componentDidCatch() {
    console.log('oshibka lvl 1')
    this.setState({ hasError: true });
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
        butClass: !state.butClass
      }
    });
  };
  
  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };


  render() {    

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

    const clazzflag= this.state.butClass;
     clazzflag ? this.clazz='success' : this.clazz='warning';

     const {getPerson,getStarship,getPersonImage,getStarshipImage,getAllStarship} = this.swapiServices;

    //  const PersonDetails = (
    //    <ItemDetails itemId={5}
    //                 getData={getPerson}
    //                 getImageUrl={getPersonImage}>
    //           <Record field="gender" label="Gender"/>
    //           <Record field="eyeColor" label="Eye Color"/>
    //     </ItemDetails>
    //  );


     
    // const ItemStarships = (
    //   <StarshipList
    //   getData={getAllStarship}
    //   onItemSelected={this.onPersonSelected}>
    //     { ({name}) => <span>{name}</span>}
    //   </StarshipList>
    // );
    
    // const starshipDetails = (
    //   <ItemDetails itemId={this.state.selectedPerson}
    //               getData={getStarship}
    //               getImageUrl={getStarshipImage}>
    //           <Record field="model" label="Model"/>
    //           <Record field="crew" label="Crew"/>    
    //           <Record field="costInCredits" label="Cost"/>    
    //   </ItemDetails>
    // );


    const demo =(
      <div>
        <PersonList>
                {({name})=><span>{name}</span>}
        </PersonList>
         <PlanetList>
                {({name})=><span>{name}</span>}
        </PlanetList>
         <StarshipList>
         {({name})=><span>{name}</span>}
        </StarshipList>
      </div>
      );


      const demo2 = (
        <div>
          <PersonDetails itemId={11}/>
          <PlanetDetails itemId={2}/>
          <StarshipDetails itemId={9}/>
        </div>
      );


        return(           
          <div>  
           <Header/>
           { planet }           
           <button
            className={`error-button btn btn-${this.clazz} btn-md`}
            onClick={this.toggleRandomPlanet}>
              Toggle Random Planet
            </button>

            <ErrorButton />
            {/* <PeoplePage/> */}
        {/* <Row left={ItemStarships} right={starshipDetails}/>           */}
            {/* {demo} */}
            {demo2}
          </div>
        );
    }
}