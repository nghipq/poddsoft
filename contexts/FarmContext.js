import React from 'react'
export const FarmContext = React.createContext();
export class FarmProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            farms:[
                { id: '1', isVaccinate: 'Yes', date: '5/9/2020', source: 'Công ty phân phối giống gà Xưn', quantity: '100', spName: 'gà bến tre', note: "" },
                { id: '2', isVaccinate: 'Yes', date: '5/9/2020', source: 'Công ty phân phối giống gà Nghị', quantity: '100', spName: 'gà đông tảo', note: "" },
                { id: '3', isVaccinate: 'Yes', date: '5/9/2020', source: 'Công ty phân phối giống gà Xưn', quantity: '100', spName: 'gà nồi', note: "" },
                { id: '4', isVaccinate: 'Yes', date: '5/9/2020', source: 'Công ty phân phối giống gà Nghị', quantity: '100', spName: 'gà bến tre', note: "" }
            ],
            farmItem: null,
            chooseChicken: null
        }
        this.chooseToChicken = this.chooseToChicken.bind(this);
        this.onChange = this.onChange.bind(this);
        this.updateItem = this.updateItem.bind(this)
    }


    chooseToChicken(chicken) {
        this.setState({
            farmItem: chicken
        })
    }
     
    onChange(e, name){
       if(this.state.farmItem){
           var chicken = this.state.farmItem
           chicken[name] = e.nativeEvent.text
           this.setState({
            farmItem: chicken
           })
       }
    }
    updateItem(){
        const withoutItem = this.state.farmItem.filter(x => x.id != farmItem.id)
        console.log(this.state.farmItem)
        this.setState({
            farms: [...withoutItem, this.state.farmItem],
        })
    }
    render() {
        return (
            <FarmContext.Provider value={{
                farmItem: this.state.farmItem,
                farms: this.state.farms,
                chooseToChicken: this.chooseToChicken,
                onChange: this.onChange,
                updateItem: this.updateItem
            }}>
                {this.props.children}
            </FarmContext.Provider>
        )
    }
}
