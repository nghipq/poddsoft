import React from 'react'
import Axios from 'axios';
import { AsyncStorage, Alert } from 'react-native';

export const StoreContext = React.createContext();
export class StoreProvider extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            bills: [],
            chooseBill: null,
            allproduct: [],
            chooseProduct: {
                name: '',
                description: '',
                price: '0',
                quantity: 0,
                types: '',
                brand: '',
                source: '',
                storeId: -1,
            }
        }
        this.chooseToBill = this.chooseToBill.bind(this);
        this.getProduct = this.getProduct.bind(this)
        this.chooseToProduct = this.chooseToProduct.bind(this)
        this.updateProduct = this.updateProduct.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
        this.onChange = this.onChange.bind(this)
        this.updateValue = this.updateValue.bind(this)
        this.insert = this.insert.bind(this)
    }

    insert() {
        const number = JSON.parse(this.state.chooseProduct.quantity)
        console.log(number)
        const chooseProduct = this.state.chooseProduct
        chooseProduct.quantity = number

        Axios.post(`store/product/create`, chooseProduct)
            .then(res => Alert.alert("Thêm sản phẩm thành công"))
            .catch(() => Alert.alert(`Thêm sản phẩm không thành công`))


        chooseProduct.images = "product/default.jpg"
        this.setState({
            allproduct: [...this.state.allproduct, chooseProduct],

        })

    }

    chooseToBill(bill) {
        this.setState({
            chooseBill: bill,
        })
    }
    chooseToProduct(product) {
        this.setState({
            chooseProduct: product
        })
    }
    getProduct(id) {
        Axios.get(`user/product/getProducts?store=${id}`)
            .then(res => {
                this.setState({
                    allproduct: res.data
                })
            })
    }

    getBills(id) {
        Axios.get(`store/bill/getBills?storeId=${id}`)
            .then(res => {
                var data = res.data
                
                data = data.filter(x => x.products.indexOf(null) == -1)

                this.setState({
                    bills: data
                })
            })
    }

    componentDidMount() {
        AsyncStorage.getItem("id").then(res => {
            this.getProduct(res)
            this.getBills(res)
            const chooseProduct = this.state.chooseProduct
            chooseProduct.storeId = res
            this.setState({
                chooseProduct
            })
        })

        console.log(this.state.allproduct.length)
    }

    deleteProduct() {
        Axios.get(`store/product/delete?id=${this.state.chooseProduct.id}`)
            .then(res => {
                if (res.data.success) { Alert.alert("Xóa thành công") }
                else {
                    Alert.alert("Xóa không được rồi nhe")
                }
                const withoutProduct = this.state.allproduct.filter(x => x.id != this.state.chooseProduct.id)
                this.setState({
                    allproduct: withoutProduct
                })
            })


    }

    updateProduct() {
        const number = JSON.parse(this.state.chooseProduct.quantity)
        console.log(number)
        const chooseProduct = this.state.chooseProduct
        chooseProduct.quantity = number
        this.setState({
            chooseProduct
        })
        Axios.post("store/product/update", this.state.chooseProduct)
            .then(res => {
                if (res.data.success) { Alert.alert("Cập nhật thành công") }
                else {
                    Alert.alert("Cập nhật không được rồi nhe")
                }
            })
    }

    onChange(e, name) {
        if (this.state.chooseProduct) {
            var chooseProduct = this.state.chooseProduct
            chooseProduct[name] = e.nativeEvent.text
            this.setState({ chooseProduct })
        }
    }

    updateValue(value) {
        if (this.state.chooseProduct) {
            var chooseProduct = this.state.chooseProduct
            chooseProduct['types'] = value
            this.setState({ chooseProduct })
        }
    }

    render() {
        return (
            <StoreContext.Provider value={{
                bills: this.state.bills,
                chooseBill: this.state.chooseBill,
                allproduct: this.state.allproduct,
                chooseProduct: this.state.chooseProduct,
                chooseToBill: this.chooseToBill,
                getProduct: this.getProduct,
                chooseToProduct: this.chooseToProduct,
                deleteProduct: this.deleteProduct,
                updateProduct: this.updateProduct,
                onChange: this.onChange,
                updateValue: this.updateValue,
                insert: this.insert

            }}>
                {this.props.children}
            </StoreContext.Provider>
        )
    }
}