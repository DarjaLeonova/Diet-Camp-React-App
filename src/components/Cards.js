import React from "react";
import CardItem from "./CardItem"
import "./Cards.css"

function Cards() {
    return (
        <div className="cards">
            <h1>Check out</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem
                        src="https://placeimg.com/640/480/people"
                        text="lorem impsum is a simply dummy text lorem impsum is a simply dummy text"
                        label="Diet"
                        path="/diets"
                        />
                        <CardItem
                            src="https://placeimg.com/640/480/people"
                            text="lorem impsum is a simply dummy text lorem impsum is a simply dummy text"
                            label="Diet"
                            path="/diets"
                        />
                    </ul>
                    <ul className="cards-items">
                        <CardItem
                            src="https://placeimg.com/640/480/people"
                            text="lorem impsum is a simply dummy text lorem impsum is a simply dummy text"
                            label="Diet"
                            path="/diets"
                        />
                        <CardItem
                            src="https://placeimg.com/640/480/people"
                            text="lorem impsum is a simply dummy text lorem impsum is a simply dummy text"
                            label="Diet"
                            path="/diets"
                        />
                        <CardItem
                            src="https://placeimg.com/640/480/people"
                            text="lorem impsum is a simply dummy text lorem impsum is a simply dummy text"
                            label="Diet"
                            path="/diets"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
