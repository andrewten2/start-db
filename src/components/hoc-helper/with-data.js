import React,{Component} from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';


const withData = (View,getData) => {
    
    return class extends Component{
        
        state = {
            itemList: null,
            error: false
        };

        componentDidMount() {    
            
            getData()
            .then((data)=>{
                this.setState({data})
            })
            .catch(this.onError);
        };


        onError = (err) => {
            this.setState({
            error: true         
            })
            console.log(`we have some problems`);
        
        }
        
        render () {
            const {data} = this.state;

            if(!data){
                return <Spinner />
            } 

            const content = (!this.state.error) ? <View {...this.props} data={data} />: <ErrorIndicator />;
        
            return (
               <div>
                    {content}
               </div>
            );
        }
    };
};

export default withData;