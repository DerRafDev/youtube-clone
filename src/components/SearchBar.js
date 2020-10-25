import React from 'react';

import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }

    //this will change the searchTerm for what the user write in the SearchBar
    handleChange = (event) => this.setState({ searchTerm: event.target.value });


    handleSubmit = (event) => {
        /* this line basically take the searchTerm from state, but just in one
        line, if we don't have this destructuring and if we need to call a 
        value, we would have to use:
        
        console.log(this.state.searchTerm, this.state.value, this.state.value1);

        And this way make console.log too big, so with the destructuring, you
        can do like this:

        console.log(searchTerm, value, value1);

        */ 
        const { searchTerm } = this.state;

        //we get the onFormSubmit from the App.js to get the data to searchTerm
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);

        //for don't making the full page refresh

        event.preventDefault();
    }

    render(){
        return(
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange}/>
                </form>
            </Paper>
        )
    }

}

export default SearchBar;