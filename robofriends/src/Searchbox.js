import React from 'react';

const Searchbox = ({searchfield, searchChange}) =>{
	return (
		<div>
			<input 
			  className ='f6 link dim br1 ba bw2 ph3 pv2 mb2 dib navy' 
			  type = 'search' 
			  placeholder = 'Search robots' 
			  onChange = {searchChange}
			/>
		</div>
	);
}

export default Searchbox;