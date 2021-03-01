import React from 'react';
import { useEffect, useState } from 'react';
import "./players.css"
import Data from '../Data/data.json'
import Player from '../Player/Player'
import Cart from '../Cart/Cart';

const Players = () => {
    const [data, setData] = useState([])
    // Using useEffect-----------------------------
    useEffect(() => {
        setData(Data)
    }, [])

    const [cart , setCart ] = useState([])
    const handelAddPlayer = player => {
        
        let results = cart.findIndex(function (value){
            return value === player
        })
        if(results === -1){
            const newCart = [...cart , player]
            setCart(newCart)
        }
        else{
            alert("Already Selected")
        }
    }
    return (
        <div className = "d-flex">
            
            <div className = "d-flex players">
                {
                    data.map(player => <Player handelAddPlayer={handelAddPlayer} key={player.id} player={player}></Player>)
                }
            </div>
            <div className="squad-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Players;