import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div className = "header">
            <h1 className = "text-dark">'Mymensingh' Cricket Team,BPL</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/players">Players</a>
                <a href="/selector">Selector</a>
                <a href="/About">About</a>
            </nav>
        </div>
    );
};

export default Header;