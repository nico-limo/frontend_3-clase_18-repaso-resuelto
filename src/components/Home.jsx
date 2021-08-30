import React, { Component } from 'react'
import "../styles/Home.css"
import items from "../items.json"

export default class Home extends Component {

    handleLink = (name) => this.props.history.push(`/product/${name}`)
    
    render() {
        return (
            <div className="home__container" >
                {items.map(item => (
                    <div onClick={() => this.handleLink(item.name)} key={item.id} className="home__product">
                        <p id="home__title">{item.name}</p>
                        <img id="home__image" src={`/images/${item.id}.png`} alt={item.name} />
                        <p>${item.price}</p>
                    </div>
                ))}
            </div>
        )
    }
}
