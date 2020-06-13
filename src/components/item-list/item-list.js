import React,{Component} from 'react';
import './item-list.css';
import Spinner from '../spinner';


export default class Itemlist extends Component{   


    state = {
        itemList: null
    };

    componentDidMount() {

        const {getData} = this.props;
        
        getData()
        .then((itemList)=>{
            this.setState({itemList})
        });
    };


    renderItems(arr) {
        
       return arr.map((item) => {
           const {id} = item;          
           const label= this.props.children(item);
                return (
                <li key={id} 
                className="list-group-item list-group-item-action d-flex "
                onClick = {() =>this.props.onItemSelected(id)}>
                {label}
           </li>
            );
       });

    }


render() {   

    const {itemList} = this.state;

    if(!itemList){
        return <Spinner />
    }

    const items = this.renderItems(itemList);

    return (
        <div className="item-list">
            <ul className="list-group">
                {items}
            </ul>            
        </div>
    );
}
};
