import React, { Component } from 'react'
import "../styles/Search.css"
import items from "../items.json"

export default class Search extends Component {
    constructor(){
        super()
        this.state = {
            inputValue : "",
        }
    }

    handleChange = (event) => this.setState({inputValue: event.target.value});
    handleSubmit = () =>  {
        if(this.state.inputValue) {
            const item = items.filter( product => product.name.includes(this.state.inputValue));
            const urlItem = item[0].name;
            this.props.history.push(`/product/${urlItem}`)
        }
        if(!this.state.inputValue) this.props.history.push('/')
    };

    render() {
      const {inputValue} = this.state
        return (
            <div className="search__container">
                <input onChange={this.handleChange} type="text" value={inputValue} />
                <button onClick={this.handleSubmit}><img width="12px" src="/images/lupa.png" alt="lupa" /></button>
            </div>
        )
    }
}
