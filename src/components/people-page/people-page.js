import React,{Component} from 'react';
import Itemlist from '../item-list'
import PersonDetails from '../person-details'
import SwapiServices from '../../services/swapi-services';
import ErrorBoundry from '../error-boundry'
import Row from '../row'
export default class PeoplePage extends Component {
    
    swapiServices = new SwapiServices();

    state={
        selectedPerson : 7
       
    }
   
   
    onPersonSelected = (selectedPerson) => {
      this.setState({ selectedPerson });
    };
  

        render(){       

        const PeopleList = (
            <Itemlist 
             onItemSelected = {this.onPersonSelected} 
             getData ={this.swapiServices.getAllPeople}>
            {(i)=>`${i.name} (${i.gender}, ${i.birthYear})`}
            </Itemlist>
            
        );

                          
        const personDetails = (
          <ErrorBoundry>
             <PersonDetails  personId= {this.state.selectedPerson}/>
          </ErrorBoundry>
        );
       
        
        return(
            <div>               
              <Row left={PeopleList} right={personDetails}/>  
            </div>
        );
    }

}