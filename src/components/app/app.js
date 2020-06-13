import React,{Component} from 'react';
import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorButton from '../error-button/error-button';
import SwapiServices from '../../services/swapi-services';
import ErrorIndicator from '../error-indicator';


import './app.css'
import PeoplePage from '../people-page/people-page';

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

            <PeoplePage />
          
          {/* <div className="row mt-2">
            <div className="col">
              <Itemlist 
                onItemSelected = {this.onPersonSelected} 
                getData ={this.swapiServices.getAllPlanets}
                renderItem={({name,population})=>`${name}, ${population}`}/>
                </div>
            <div className="col"><PersonDetails /></div>     
          </div>

          <div className="row mt-2">
            <div className="col">
              <Itemlist 
                onItemSelected = {this.onPersonSelected} 
                getData ={this.swapiServices.getAllStarship}
                renderItem={({model,length})=>`${model}, ${length}`}/>
                </div>
            <div className="col"><PersonDetails  /></div>     
          </div> */}



          </div>
        );
    }
}