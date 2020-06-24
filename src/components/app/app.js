import React,{Component} from 'react';
import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorButton from '../error-button/error-button';
import SwapiServices from '../../services/swapi-services';
import ErrorIndicator from '../error-indicator';
import {SwapiServiceProvider} from '../swapi-service-context';
import {PeoplePage,PlanetPage,StarshipPage} from '../pages/index';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import LoginPage from '../pages/login-page';
import SecretPage from '../pages/secret-page';
import './app.css'
import { StarshipDetails } from '../sw-components';


export default class App extends Component {  

  

  state = {
    swapiServices: new SwapiServices(),
    showRandomPlanet: true,
    butClass : true,
    hasError: false,
    isLoggedIn: false    
  };


  onLogin = () =>{
    this.setState({
      isLoggedIn: true
    })
  }

  componentDidCatch() {
    console.log('oshibka lvl 1')
    this.setState({ hasError: true });
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
        butClass: !state.butClass
      }
    });
  };
  



  render() {    

    const {swapiServices,isLoggedIn} = this.state;
    

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

    const clazzflag= this.state.butClass;
     clazzflag ? this.clazz='success' : this.clazz='warning';


        return(      
          <SwapiServiceProvider value = {swapiServices} >
            <Router>  
            <div>  
            <Header/>
            { planet }           
            <div className='buttons text-center'>
              <button
                className={`error-button btn btn-${this.clazz} btn-md`}
                onClick={this.toggleRandomPlanet}>
                  Toggle Random Planet
                </button>
                <ErrorButton />
            </div>
              <Switch>     
              <Route path ='/' exact render={()=> <h2> Welcome to StartDB </h2>} />
              <Route path ='/people/:id?' component={PeoplePage} />
              <Route path ='/planets' component={PlanetPage} />
              <Route path ='/starships' exact component={StarshipPage} />                            
              
              <Route path ='/starships/:id' 
                  render = {({match})=> {
                        const {id} = match.params;
                       console.log(match);
                     return  <StarshipDetails itemId={id}/> 
                     }}/>   
              <Route path ='/login'
                    render= {()=>(<LoginPage 
                                      isLoggedIn={isLoggedIn}
                                      onLogin={this.onLogin} />                                        
                    )} />    
                    
              <Route path ='/secret'
                    render= {()=>(<SecretPage isLoggedIn={isLoggedIn}/>
                    )} />  

              <Route render={()=><h2>Page not found</h2>} />
              </Switch>  
             
             </div>
             </Router>
          </SwapiServiceProvider>
        );
    }
}