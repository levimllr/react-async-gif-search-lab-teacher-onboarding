import React, { Component } from 'react';

class GifSearch extends Component {
    state = {
        query: ""
    };

    constructor(props) {
        super(props);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.search(this.state.query);
    };

    handleChange = (event) => {
        this.state.query = event.target.value;
    };

    render() {
        return (<form onSubmit={this.handleSubmit}>
            <div>
                <label>
                    Enter a Search Term:
                    <input 
                    id="term" 
                    name="term" 
                    type="text"
                    onChange={this.handleChange}
                    />
                </label>
            </div>
            <div>
                <button type="submit">Find Gifs</button>
            </div>
      </form>)
    };
};

export default GifSearch;