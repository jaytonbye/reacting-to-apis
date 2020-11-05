import React from 'react';
import Movie from './Movie'
import 'isomorphic-fetch'
import 'es6-promise'
import Person from './Person';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            movies: [],
            people: [],
            showingMovies: false,
            showingPeople: false
        }
    }
    clickHandler = ()=>{
        this.setState({
            showingMovies: !this.state.showingMovies
        })
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res=>res.json())
        .then(data=>this.setState({movies: data}))
    }

    personClickHandler = ()=>{
        this.setState({
            showingPeople: !this.state.showingPeople
        })
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(res=>res.json())
        .then(data=>this.setState({people: data}))
    }

    render(){
        let movieArray = this.state.movies.map((movie)=>{
            return(
                    <Movie key={movie.id} title={movie.title} description={movie.description} release_date={movie.release_date} director={movie.director} rt_score={movie.rt_score} />
            )
        })
        let peopleArray = this.state.people.map((person)=>{
            return(
                <Person key={person.id} name={person.name} age={person.age} gender={person.gender}/>
            )
        })
        if (this.state.showingMovies){
            return (
                <>
                <button onClick={this.clickHandler}>Get these flicks out of my face!</button>
                {movieArray}
                </>
                )
        } else if(this.state.showingPeople){
            return (
                <>
                <button onClick={this.personClickHandler}>Get these herbs out of my face!</button>
                {peopleArray}
                </>
                )
        }else{
            return (
                <>
                    <button onClick={this.clickHandler}>Show me the flicks!</button>
                    <button onClick={this.personClickHandler}>Show me the peoples!</button>
                </>
            )
        }
    }
}
export default App;