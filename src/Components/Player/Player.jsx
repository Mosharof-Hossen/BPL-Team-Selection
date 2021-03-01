import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "./player.css"

const player = (props) => {

    let {name,image,age,battingStyle,bowlingStyle,price,role} = props.player
    
    return (
        <div className = "player-container">
            <div className = "player-image">
                <img src={image} alt=""/>
            </div>
            <div className = "player-details ">
                <div>
                    <p><small>Name : {name}</small></p>
                    <p><small>Age : {age}</small></p>
                    <p><small>Role : {role}</small></p>
                    <p><small>Batting Style : {battingStyle}</small></p>
                    <p><small>Bowling Style : {bowlingStyle}</small></p>
                    <p><small>Salary : {price} TK</small></p>
                </div>
                <div>
                    <button  className ="btn btn-primary "  onClick={() =>{
                        props.handelAddPlayer(props.player);
                        }
                    }><FontAwesomeIcon icon={faPlus} />  Hire</button>
                </div>
            </div>
        </div>
    );
};

export default player;