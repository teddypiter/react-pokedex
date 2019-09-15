import React from 'react';
//import styled from 'styled-components';

export default class NavBar extends React.Component{
	render(){
		return (
			<div>
				<nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
					<a href="/" className="navbar-brand col-md-2">Pokedex</a>
				</nav>
			</div>
		)
	}
}