import React from 'react';
import Data from '../mock/valuesMock';

class PokemonList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            result:[],
            error:null
        }
    }
    render(){
        return(<>

        <h1>{this.props.Content.heading}</h1>
         

        </>)
    }

}
PokemonList.defaultProps={
    Content:Data
}
export default PokemonList;