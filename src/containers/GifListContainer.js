import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {
    state = {
        gifs: []
    };

    handleSearch = (query) => {
        console.log(`Handling search of ${query}!`)
        let url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`;
        fetch(url)
            .then(response => response.json())
            .then(json => {
                this.setState({gifs: json.data.map(
                    object => object.images.original.url
                )})
            });
    };

    render() {

        return (
            <div>
                < GifSearch search={this.handleSearch} />
                < GifList gifs={this.state.gifs} />
            </div>
        )
    };

};

export default GifListContainer;