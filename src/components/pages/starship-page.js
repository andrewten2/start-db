import React from 'react';
import {StarshipList,} from '../sw-components';
import {withRouter} from 'react-router-dom';

const StarshipPage = ({history}) => {  

        return(
            <div>               
             <StarshipList 
                onItemSelected={(itemId)=> {const newPath =`${itemId}`;
                    history.push(newPath);
             }} />
            </div>
        );
    

}

export default withRouter(StarshipPage);