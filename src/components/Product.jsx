import React, { Component } from 'react'
import "../styles/Product.css"
import items from "../items.json"
export default class Product extends Component {
    constructor() {
        super();
        this.state = {
            product: {},
            loading: true
        }
    }

    componentDidMount() {
        const { product } = this.props.match.params;
        const item = items.filter(item => item?.name === product);
        this.setState({ product: item, loading: false })
    }

    componentWillReceiveProps(nextProps){
        const { product } = nextProps.match.params;
        const item = items.filter(item => item?.name === product);
        this.setState({ product: item, loading: false })

    }
    render() {
        const { product, loading } = this.state;
        if (loading) return <p>Loading...</p>;
        if (!product.length) return <p>Product not Found</p>
        return (
            <div className="product__container">
                <p id="home__title">{product[0]?.name}</p>
                <img id="product__image" src={`/images/${product[0].id}.png`} alt={product[0].name} />
                <p>${product[0].price}</p>
                <p id="product__desc">{product[0].description}</p>
            </div>
        )
    }
}


