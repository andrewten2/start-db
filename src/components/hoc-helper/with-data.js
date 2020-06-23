import React,{Component} from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';


const withData = (View) => {
    
    return class extends Component{
        
        state = {
            data: null,
            error: false
            
        };

        componentDidMount() {    
            
            this.props.getData()
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
            const {data,error} = this.state;

            // if(error){
            //     return <ErrorIndicator />
            // }

            if(!data && !error) {
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