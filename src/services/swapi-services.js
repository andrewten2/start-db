
export default class SwapiServices { 

    _apiBase = 'http://swapi.dev/api';
  
    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);
        
        if(!res.ok){
          throw new Error (`could not fetch ${url}` +
        `, received ${res.status}`)
        }
      return await res.json();
    }
  
     getAllPeople = async() => {
      const res = await this.getResource(`/people/`);      
      return res.results.map(this._transformPerson).slice(0,8);
    };
  
     getPerson = async(id) => {
      const person = await this.getResource(`/people/${id}/`);
      return this._transformPerson(person);
    };
   
  
    getAllPlanets = async() => {
      const res = await this.getResource(`/planets/`);
      console.log(res.results);
      return res.results.map(this._transformPlanet).slice(0,8);
    };
  
     getPlanet = async(id) => {
      const planet = await this.getResource(`/planets/${id}/`);
      return this._transformPlanet(planet);
    };
  
     getAllStarship = async () => {
      const res = await this.getResource(`/starships/`);
      return res.results.map(this._transformStarship).slice(0,8);
    };
  
     getStarship = async(id) => {
      const starship = await this.getResource(`/starships/${id}/`);
      return this._transformStarship(starship);
    }


    _transformPerson = (person) => { 
      
      return {
        id: this._extractId(person),
        name: person.name,        
        gender : person.gender,
        birthYear: person.birth_year,
        eyeColor: person.eye_color,
        height: person.height,
        hairColor:person.hair_color
      }

    }

    _transformPlanet = (planet) => {     

      return {
        id: this._extractId(planet),
        name: planet.name,
        population: planet.population,
        diameter: planet.diameter,
        rotationPeriod: planet.rotation_period,
        orbitalPeriod: planet.orbital_period,
        surfaceWater: planet.surface_water,
        climate: planet.climate    
      }
    }


    _transformStarship = (starship) => {     

      return {
        id: this._extractId(starship),
        name: starship.name,
        model : starship.model,
        manufacture : starship.manufacturer,
        costInCredits : starship.cost_in_credits,
        length : starship.length,
        crew : starship.crew,
        passengers : starship.passengers,
        cargoCapacity : starship.cargo_capacity        
      }
    }

    _extractId(item) {
      const idRegExp = /\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1];
      
    }


   getPersonImage = (item) => {
     return `https://starwars-visualguide.com/assets/img/characters/${item.id}.jpg`
   } 

   getStarshipImage = ({id}) => {
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
  } 

  getPlanetImage = (item) => {
    return `https://starwars-visualguide.com/assets/img/planets/${item.id}.jpg`
  } 

}



  // const swapi = new SwapiServices();
  // console.log(swapi.getStarshipImage(10));
  // console.log(swapi.getPersonImage(10));

  // swapi.getAllPeople().then((body)=>{
  //   console.log(body);
  // });
  
  // swapi.getPlanet(3).then((people)=> {
  //   console.log(people);
  //   people.forEach(p =>{
  //     console.log(p);
  //   })
  // });
  
  
  // swapi.getAllStarship().then(p=>{
  //   console.log(p);
  // })
  
  // swapi.getStarship(3).then(p=>{
  //   console.log(p);
  // })