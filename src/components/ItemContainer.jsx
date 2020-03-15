import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props) {
    return (
        <div>
            <h2>{props.itemName}s left - {props.item}</h2>
            <button onClick={props.buyItem}>Buy {props.itemName}</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? 
    state.cake.numOfCakes 
    : state.iceCream.numOfIceCreams
    const itemNameState = ownProps.cake ?
    "Cake"
    : "Ice Cream"

    return {
        itemName: itemNameState,
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())

    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
