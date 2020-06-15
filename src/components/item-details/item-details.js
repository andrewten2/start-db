import React, { Component } from 'react';

import './item-details.css';
import SwapiServices from '../../services/swapi-services';
import Spinner from '../spinner'
import ErrorButton from '../error-button/error-button';


const Record = ({item,field,label}) =>{
  console.log(item);
  return(
  <li className="list-group-item">
              <span className="term">{label}</span>
              <span>{item[field]}</span>
            </li>
);
};

export {
  Record
};

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

    const content = hasData ?  <PersonView item={item} object={this.props.children} image={image} itemId={this.props.itemId}/> : null;



    return (
      <div className="person-details card">
       {content}
       {spinner}
     </div>
    );
  }

}

const PersonView = ({item,itemId,image,object}) => {

  const {id,name} = item;
  console.log(name,id,image);
  return(
    <React.Fragment>
            
        <img alt="person" className="person-image"
          src={image} />

        <div className="card-body">
  <h4>{name},{itemId}</h4>
          <ul className="list-group list-group-flush">
           { React.Children.map(object,(child)=> {             
              return React.cloneElement(child,{item});
            })
            }
          </ul>
          <ErrorButton/>
        </div>      
    </React.Fragment>
    
  )
}