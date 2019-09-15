import React from 'react';
//import styled from 'styled-components';
import PokemonList from '../pokemon/PokemonList';

export default class NavBar extends React.Component{
	render(){
		return (
			<div className="row">
                <div className="col">
                    <PokemonList/>
			    </div>
			</div>
		)
	}
}