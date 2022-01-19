import React from 'react';
import '../App.css';
import './HeroSection.css';
import {Button} from "./Button";

function HeroSection() {
    return (
        <div className="hero-container">
            <img className="photo" alt="photo" src="./photo/imggg.jpg"/>
            <h1 className="text">Find out their beauty secret</h1>
            <div className="hero-btns">
                <Button className="btn" buttonStyle="btn-outline" buttonSize="btn-large">
                    Default button
                </Button>
                <Button className="btn" buttonStyle="btn-primary" buttonSize="btn-large">
                    Default button
                </Button>
            </div>
        </div>
    )
}

export default HeroSection