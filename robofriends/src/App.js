import React, {Component} from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state ={
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch(`https://jsonplaceholder.typicode.com/users`)
		  .then(response => response.json())
		  .then(users =>this.setState({robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if( this.state.robots.length === 0)
			return <h1>LOADING..</h1>
		else {
			return(
				<div>
				    <div className= 'header'>
						<h1>Robofriends</h1>
						<Searchbox searchChange = {this.onSearchChange}/>
					</div>
					<CardList robots = {filteredRobots}/>
				</div>
	        );
	    }
	}
	
}

export default App;