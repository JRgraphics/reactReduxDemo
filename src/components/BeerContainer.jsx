import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { drinkBeer } from '../redux';

function BeerContainer() {
    const numOfBeers = useSelector(state => state.beer.numOfBeers);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Num of Beers - {numOfBeers}</h2>
            <button onClick={() => dispatch(drinkBeer())}>Drink Beer</button>
        </div>
    )
}

export default BeerContainer
