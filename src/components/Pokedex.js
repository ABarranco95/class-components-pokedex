import React, { Component } from 'react'
import Axios from 'axios'


class Pokedex extends Component {

    constructor() {
        super()

        this.state = {
            pokemonName: 'pikachu',
            pokemonImage: ''

        }
    }

    componentDidMount() {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`).then ((res) => {
            this.setState({ pokemonImage: res.data.sprites.front_default})
        })
    }

    componentDidUpdate(prevProps, prevState) {

        if (this.state.pokemonName === '') {
            return
        }

        if (prevState.pokemonName === this.state.pokemonName) {
            return
        }

        Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`).then ((res) => {
            this.setState({ pokemonImage: res.data.sprites.front_default})
        }).catch((err) => {
            this.setState({ pokemonImage: ''})
        })
    }

    render() {
        return (
            <div>
                {/* 
                
                */}
                <h1>Fischer-Price My First Pokedex</h1>
                <input value={this.state.pokemonName} onChange ={(e) => {
                    this.setState({pokemonName: e.target.value})
                }}/>
                <img src={this.state.pokemonImage} />
            </div>
        )
    }
}
export default Pokedex