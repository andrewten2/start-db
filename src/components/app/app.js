import React,{Component} from 'react';
import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorButton from '../error-button/error-button';
import SwapiServices from '../../services/swapi-services';
import ErrorIndicator from '../error-indicator';
import {SwapiServiceProvider} from '../swapi-service-context';
import {PeoplePage,PlanetPage,StarshipPage} from '../pages/index';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './app.css'
import { StarshipDetails } from '../sw-components';


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
  



  render() {    
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

    const clazzflag= this.state.butClass;
     clazzflag ? this.clazz='success' : this.clazz='warning';


        return(      
          <SwapiServiceProvider value = {this.swapiServices} >
            <Router>     
            <div>  
            <Header/>
            { planet }           
            <button
              className={`error-button btn btn-${this.clazz} btn-md`}
              onClick={this.toggleRandomPlanet}>
                Toggle Random Planet
              </button>
              <ErrorButton />  
              <Route path ='/' exact render={()=> <h2> Welcome to StartDB </h2>} />
              <Route path ='/people' exact render={()=> <h2> Welcome PeoplePage </h2>} />
              <Route path ='/people' component={PeoplePage} />
              <Route path ='/planets' component={PlanetPage} />
              <Route path ='/starships' exact component={StarshipPage} />                            
              <Route path ='/starships/:id' 
                     render = {({match})=> {
                       const {id} = match.params;
                       console.log(match);
                     return  <StarshipDetails itemId={id}/> 
                     }}/>                            
             </div>
             </Router>
          </SwapiServiceProvider>
        );
    }
}