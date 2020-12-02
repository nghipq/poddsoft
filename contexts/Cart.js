import React from 'react'
import { AsyncStorage, Alert } from 'react-native'
import Axios from 'axios'

export const CartContext = React.createContext();
export class CartProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: "",
            address: "",
            cartItems: [],
            chooseProduct: null,
            Count: 0,
            Total: '0',
            ly: 0,
            lx: 0,
            userId: null
        };
        this.addToCart = this.addToCart.bind(this);
        this.chooseToProduct = this.chooseToProduct.bind(this);
        this.changeUnit = this.changeUnit.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.order = this.order.bind(this);
        this.onChange = this.onChange.bind(this)
    }

    // addToCart(product){
    //     console.log("Add" , product)
    //     this.setState({
    //         cartItems: this.state.cartItems.concat(product)
    //     });
    // }
    componentDidMount() {
        AsyncStorage.getItem("id").then(res => this.setState({userId: res}))
        navigator.geolocation.getCurrentPosition(position => this.setState({
            ly: position.coords.latitude,
            lx: position.coords.longitude
        }))
    }

    addToCart(item) {
        const existItem = this.state.cartItems.filter(x => x.id === item.id);
        if (existItem.length > 0) {
            const withoutItem = this.state.cartItems.filter(x => x.id !== item.id);
            const updateItem = {
                ...existItem[0], units: existItem[0].units + 1
            }

            this.setState({
                cartItems: [...withoutItem, updateItem],
                Count: this.state.Count + 1,
                Total: JSON.stringify(JSON.parse(this.state.Total) + JSON.parse(item.price))
            })
        }
        else {
            this.setState((prevState) => {
                return {
                    cartItems: prevState.cartItems.concat({ ...item, units: 1 }),
                    Count: this.state.Count + 1,
                    Total: JSON.stringify(JSON.parse(this.state.Total) + JSON.parse(item.price))
                };
            });
        }
    }

    chooseToProduct(product) {
        this.setState({
            chooseProduct: product
        })
    }

    changeUnit(value, item) {
        const existItem = this.state.cartItems.filter(x => x.id == item.id)
        const withoutItem = this.state.cartItems.filter(x => x.id != item.id)
        const updateItem = {
            ...existItem[0], units: value
        }

        let Count = this.state.Count
        let Total = this.state.Total

        if (value < existItem[0].units) {
            Count -= 1,
                Total = JSON.stringify(JSON.parse(this.state.Total) - JSON.parse(item.price))
        } else {
            Count += 1,
                Total = JSON.stringify(JSON.parse(this.state.Total) + JSON.parse(item.price))
        }

        this.setState({
            cartItems: [...withoutItem, updateItem],
            Count
        })
    }

    onChange(e, name) {
        this.setState({
            [name]: e.nativeEvent.text
        })
    }

    removeItem(item) {
        const withoutItem = this.state.cartItems.filter(x => x.id != item.id)
        const count = this.state.cartItems.filter(x => x.id == item.id)[0].units
        this.setState({
            cartItems: withoutItem,
            Count: this.state.Count - count,
            Total: JSON.stringify(JSON.parse(this.state.Total) - JSON.parse(item.price * count))
        })
    }

    async order() {
        const { cartItems, userId, phone, address, lx, ly } = this.state
        products = cartItems.map(x => {
            return { [`${x.id}`]: x.units }
        })

        const data = {
            userId,
            phone,
            address,
            lx,
            ly,
            products
        }

        await Axios.post("store/bill/create", data)
            .then(res => Alert.alert(`Đặt hàng thành công, mã đơn hàng của bạn là ${res.data.billId}`))
            .catch(() => Alert.alert(`Đặt hàng không thành công`))
    }


    render() {
        return (
            <CartContext.Provider value={{
                cartItems: this.state.cartItems,
                chooseProduct: this.state.chooseProduct,
                Count: this.state.Count,
                Total: this.state.Total,
                phone: this.state.phone,
                address: this.state.address,
                addToCart: this.addToCart,
                chooseToProduct: this.chooseToProduct,
                changeUnit: this.changeUnit,
                removeItem: this.removeItem,
                order: this.order,
                onChange: this.onChange
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}