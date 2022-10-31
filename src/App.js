import React from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import data from "./data";
 
const App = () => {

    const cards = data.map( (card,index) => (<div><Card key = {index} item = {card}/><hr/></div>));

    return(
        <div className="app">
            <Navbar />
            {cards}
        </div>
    )
}

export default App
