import React from 'react';
import './item-list.css';
import PropTypes from 'prop-types';


const  Itemlist =(props) => {   

 
    const {data=true,onItemSelected,children: renderLabel}= props;
    const items = data.map((item) => {
        const {id} = item;          
        const label= renderLabel(item);
             return (
             <li key={id} 
             className="list-group-item list-group-item-action d-flex "
             onClick = {() => onItemSelected(id)}>
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

Itemlist.defaultProps = {
    onItemSelected: ()=> {}
};

Itemlist.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
};


export default  Itemlist;