import React from 'react';
import Data from '../mock/valuesMock';
import axios from "axios";


class PokemonList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            result:[],
            error:null
        }
    }
    componentDidMount(){
       this.setAbility(this.props.Content.drop1[0].ability.name);
    }

    setAbility = (event)=>{
      this.getAbilities(event);
    }

    getAbilities=(name)=>{
       axios.get("https://pokeapi.co/api/v2/pokemon/"+name).then((res)=>{
           this.getData(res.data)
       })

    }
    getData(result){
       this.setState({result:result.abilities})

    }

    handleDropDownChange(e){
        e.preventDefault();
        this.setAbility(e.target.value);

    }
    render(){
        return(<>

        <h1>{this.props.Content.heading}</h1>
        <div className='dropdown'>
            <label>Select Name: </label><br/>
        </div>
        <div>
            <select onChange={(e) => this.handleDropDownChange(e)}>
              {this.props.Content.drop1.map((x)=>{
                return <option>{x.ability.name}</option>
              })}
            </select>
        </div>
        <br />
        <label>Select Abilities</label><br/>

      <select>
            {this.state.result.map((x)=> {
                return <option>{x.ability.name}</option>
            })}
        </select> 
                 </>)
    }

}
PokemonList.defaultProps={
    Content:Data
}
export default PokemonList;