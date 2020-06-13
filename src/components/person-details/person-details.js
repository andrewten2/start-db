import React, { Component } from 'react';

import './person-details.css';
import SwapiServices from '../../services/swapi-services';
import Spinner from '../spinner'
import ErrorButton from '../error-button/error-button';


export default class PersonDetails extends Component {

  swapiService = new SwapiServices();

  state ={
    person : null,
    loading : true,   
  };

  componentDidMount(){
    this.updatePerson();  
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
      
      }

  }



  updatePerson() {
    this.setState({loading:true});

    const {personId} = this.props;
    console.log(personId);
    if (!personId) {
      return;
    }

    
    this.swapiService.getPerson(personId)
    .then((person)=>{
      this.setState({
        person,
        loading: false     
       })
    })

    ;
  }


  render() {   

    if(!this.state.person){
      return <span> Select a person from a list</span>
    }

    const {loading} = this.state;
    const {person} = this.state;
    const spinner = loading ? < Spinner /> : null;
    const hasData = !(loading);

    const content = hasData ?  <PersonView person={person} personId={this.props.personId}/> : null;



    return (
      <div className="person-details card">
       {content}
       {spinner}
     </div>
    );
  }

}

const PersonView = ({person,personId}) => {

  const {id,name,gender,birthYear,eyeColor} = person;

  
  return(
    <React.Fragment>
            
        <img alt="person" className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
  <h4>{name},{personId}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term"> Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
          <ErrorButton/>
        </div>      
    </React.Fragment>
    
  )
}