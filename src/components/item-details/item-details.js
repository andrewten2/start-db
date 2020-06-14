import React, { Component } from 'react';

import './item-details.css';
import SwapiServices from '../../services/swapi-services';
import Spinner from '../spinner'
import ErrorButton from '../error-button/error-button';


export default class ItemDetails extends Component {

  swapiService = new SwapiServices();

  state ={
    item : null,
    loading : true,  
    image : null 
  };

  componentDidMount(){
    this.updateItem();  
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
      
      }

  }



  updateItem() {
    this.setState({loading:true});

    const {itemId, getData, getImageUrl} = this.props;   
    if (!itemId) {
      return;
    }

    
    getData(itemId)
    .then((item)=>{
      this.setState({
        item,
        loading: false,
        image: getImageUrl(item)     
       })
    })
    ;
  }


  render() {   

    if(!this.state.item){
      return <span>Some problems((((((</span>
    }

    const {loading,item,image} = this.state;
 
    const spinner = loading ? < Spinner /> : null;
    const hasData = !(loading);

    const content = hasData ?  <PersonView item={item} image={image} itemId={this.props.itemId}/> : null;



    return (
      <div className="person-details card">
       {content}
       {spinner}
     </div>
    );
  }

}

const PersonView = ({item,itemId,image}) => {

  const {id,name,gender,birthYear,eyeColor} = item;
  console.log(name,id,image);
  return(
    <React.Fragment>
            
        <img alt="person" className="person-image"
          src={image} />

        <div className="card-body">
  <h4>{name},{itemId}</h4>
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