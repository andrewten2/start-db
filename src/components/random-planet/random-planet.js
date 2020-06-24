import React, { Component } from 'react';

import './random-planet.css';

import SwapiServices from '../../services/swapi-services'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'
import TogleRandom from '../toggle-button'
import PropTypes from 'prop-types';


export default class RandomPlanet extends Component {

 static defaultProps = {
    updateInterval: 30000
  };

 static propTypes ={
   updateInterval: PropTypes.number
 };
 
  swapiServices = new SwapiServices();

  state ={
   planet : {},
   loading : true
  }
  
  componentDidMount() {
    //const {updateInterval} =this.props;
    this.updatePlanet();
    //this.interval = setInterval(this.updatePlanet,updateInterval);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log('componentWillUnMount');

  }

  

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading : false,
      error : false
    });
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
    console.log(`we have some problems`);

  }

  updatePlanet= () => {
    const id = Math.floor(Math.random()*25) +3;
    console.log(`update planet`);
    this.swapiServices
    .getPlanet(id)
    .then(this.onPlanetLoaded)
    .catch(this.onError);
  };

 

  render() {

    const{planet, loading, error} = this.state;

    const hasData = !( loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? < Spinner /> : null;
    const content = hasData ? <PlanetView planet = {planet} /> : null;

  
    return (
      <div className="random-planet jumbotron rounded">   
      {errorMessage}        
      {spinner}
      {content}
      <TogleRandom OnRandom={()=>this.updatePlanet()}/>
      </div>

    );
  }
}

const PlanetView = ({planet,}) => {

  const{name,population,rotationPeriod,diameter,id,orbitalPeriod,surfaceWater,climate} = planet;

  return(
    <React.Fragment>   
        <div className='random-img-block'>
          <img className="planet-image" alt="planet"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        </div>
        
      <div className='planet-description'> 

      <div className='planet-name text-center'>
        <h3>{name}</h3>
      </div>         
        
        <div className='d-flex text-center'>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population :</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period :</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter :</span>
              <span>{diameter}</span>
            </li>
          </ul>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Orbital Period :</span>
              <span>{orbitalPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Surface Water :</span>
              <span>{surfaceWater}</span>
            </li>             
            <li className="list-group-item">
              <span className="term">Climate :</span>
              <span>{climate}</span>
            </li>            
          </ul>
        </div>
      </div> 
    </React.Fragment>
    
  )
}