import React from 'react';

const AddMovie = props => {
    return (
        <form onSubmit={props.addMovie}>
            <input type="text" name="title" placeholder="Movie title"  onChange={props.handleChange}/>
            <input type="text" name="director" placeholder="Movie director"  onChange={props.handleChange}/>
            <input type="number" name="metascore" placeholder="Movie metascore"  onChange={props.handleChange}/>
            <input type="text" name="stars" placeholder="Movie stars (separated by commas)"  onChange={props.handleStarsChange}/>
            <button type="submit">Add Movie</button>
        </form>
    )
}

export default AddMovie;