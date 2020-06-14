import React,{Component} from 'react';
import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorButton from '../error-button/error-button';
import SwapiServices from '../../services/swapi-services';
import ErrorIndicator from '../error-indicator';
import Row from '../row'

import './app.css'
import PeoplePage from '../people-page/people-page';
import ItemDetails from '../item-details/item-details';

export default class App extends Component {  

  swapiServices = new SwapiServices();

  state = {
    showRandomPlanet: true,
    butClass : true,
    hasError: false
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
  


  render() {    

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

    const clazzflag= this.state.butClass;
     clazzflag ? this.clazz='success' : this.clazz='warning';

     const {getPerson,getStarship,getPersonImage,getStarshipImage} = this.swapiServices;

     const PersonDetails = (
       <ItemDetails itemId={5}
                    getData={getPerson}
                    getImageUrl={getPersonImage}/>
     );


     const starshipDetails = (
      <ItemDetails itemId={5}
                  getData={getStarship}
                  getImageUrl={getStarshipImage}/>
    );


    

        return(           
          <div>  
           <Header/>
           { planet }           
           <button
            className={`error-button btn btn-${this.clazz} btn-lg`}
            onClick={this.toggleRandomPlanet}>
              Toggle Random Planet
            </button>

            <ErrorButton />

        <Row left={PersonDetails} right={starshipDetails}/>          
          
          </div>
        );
    }
}