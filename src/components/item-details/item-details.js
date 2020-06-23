import React, { Component } from 'react';

import './item-details.css';
import SwapiServices from '../../services/swapi-services';
import Spinner from '../spinner'
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator';


const Record = ({item,field,label}) =>{
return(
  <li className="list-group-item">
              <span className="term">{label}</span>
              <span>{item[field]}</span>
            </li>
);
}

export {Record};

export default class ItemDetails extends Component {

  swapiService = new SwapiServices();

  state ={
    item : null,
    loading : true,  
    image : null,
    hasError: false
  };

  componentDidMount(){
    this.updateItem();  
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
      
      }

  }

  componentDidCatch() {
    console.log('oshibka lvl 1')
    this.setState({ hasError: true });
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

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const {loading,item,image} = this.state;
 
    const spinner = loading ? < Spinner /> : null;
    const hasData = !(loading);

    const content = hasData ?  <PersonView item={item} object={this.props.children} image={image} itemId={this.props.itemId}/> : null;

    if(!this.state.item){
      return <span className="text-center" >Select a item from a  right list </span>
    }

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
  return(
    <React.Fragment>
            
        <img alt="person" className="person-image"
          src={image} />

        <div className="card-body">
  <h4>{name},{itemId}</h4>
          <ul className="list-group list-group-flush">
           { React.Children.map(object,(child, idx)=> {             
              return React.cloneElement(child,{item});
            })
            }
          </ul>
          <ErrorButton/>
        </div>      
    </React.Fragment>
    
  )
}