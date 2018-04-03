import React, { Component } from 'react';

class Box extends Component {
    state = {
        quote: undefined,
        author: undefined
    };
    getQuote = () => {
        const url = "https://talaikis.com/api/quotes/random/";
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            this.setState(() => ({
                quote: `"${data.quote}"`,
                author: data.author
            }));
            console.log(this.state.quote);
            console.log(this.state.author);
        })
        .catch(function(error) {
            console.log(error);
        });  
    };
    componentDidMount() {
        this.getQuote()
    };
    render() {
        return (
            <div className='quote__container'>
                <p className='quote__container_quote'>{this.state.quote}</p>
                <div className='quote__container_secondary'>
                    <h3 className='quote__container_author'>{this.state.author}</h3>
                    <button className='quote__container_button' onClick={this.getQuote}>Next Quote</button>
                </div>
            </div>
        )
    };
};

export default Box