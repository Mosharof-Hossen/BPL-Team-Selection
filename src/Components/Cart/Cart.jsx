import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((total,prd)=>total + prd.price,0)
    return (
        <div className = "squad-display">
            <div className="squad">
                <h2>Final Squad</h2>
            </div>
            <div >
                <div className = "cart-hisab">
                    <h6>Total players : {cart.length}</h6>
                    
                    <h6>Total Budget:{total} TK</h6>
                    
                </div>
                <div>
                    <h6>Selected Players and Salary :</h6>
                    <ul style={{listStyleType:"square"}}>
                        {
                            cart.map((player) =><li>{player.name} - {player.price}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cart;