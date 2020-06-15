import React from 'react';
import './item-list.css';


const  Itemlist =(props) => {   

 
    const {data,onItemSelected,children: renderLabel}= props;
    const items = data.map((item) => {
        const {id} = item;          
        const label= renderLabel(item);
             return (
             <li key={id} 
             className="list-group-item list-group-item-action d-flex "
             onClick = {() =>onItemSelected(id)}>
             {label}
             </li>
            );
    });

    return (
        <div className="item-list">
            <ul className="list-group">
                {items}
            </ul>            
        </div>
    );
};



export default  Itemlist;