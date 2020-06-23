import React,{Component} from 'react';
import {PlanetList,PlanetDetails} from '../sw-components';
import Row from '../row'
export default class PlanetPage extends Component {
    

    state={
        selectedItem : null
       
    }   
   
    onItemSelected = (selectedItem) => {
      this.setState({ selectedItem });
    };
  
        render() {     
        
        return(
            <div>               
              <Row left={ <PlanetList onItemSelected={this.onItemSelected} /> } 
                   right={ <PlanetDetails itemId={this.state.selectedItem}/> }
                />  
            </div>
        );
    }

}