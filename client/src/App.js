import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios'

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import AddMovie from './Movies/AddMovie';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: [],
      savedList: [],
      newMovie: {
        title: '',
        director: '',
        metascore: '',
        stars: []
      }
    }
  }

  addToSavedList = (movie) => {
    console.log(this.state.savedList)
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({savedList});
  }

  handleChange = e => {
    this.setState({
      newMovie: { 
        ...this.state.newMovie,
        [e.target.name]: e.target.value
      }
    })
  }

  handleStarsChange = e => {
    this.setState({ newMovie: { ...this.state.newMovie, stars: e.target.value.split(',')}})
  }

  addMovie = e => {
    console.log('added movie')
    e.preventDefault();
    axios.post('http://localhost:5000/api/movies/', this.state.newMovie)
      .then(res => this.setState({ movies: res.data }))
      .catch(err => console.log(err));
    this.props.history.push('/')
  }

  render(){
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" render={ (props) => {
          return(<Movie {...props} addToSavedList={this.addToSavedList}/>)
        }} />
        <Route path="/movie/add" render={props => <AddMovie handleChange={this.handleChange} handleStarsChange={this.handleStarsChange} addMovie={this.addMovie} {...props} />}/>
      </div>
    )
  }
}
