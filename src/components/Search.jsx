import React, { Component } from 'react'
import "../styles/Search.css"

export default class Search extends Component {
    constructor(){
        super()
        this.state = {
            inputValue : "",
        }
    }

    handleChange = (event) => this.setState({inputValue: event.target.value});
    handleSubmit = () =>  {
        if(this.state.inputValue) this.props.history.push(`/product/${this.state.inputValue.toLowerCase()}`)
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
