import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';


function App() {

    const [robots, setRobots] = useState([]);
    // Use state is returning a piece of state and a function that changes that state.
    const [searchfield, setSearchfield] = useState('');
    // Another advantage of this is that the states are now separated...
    // in the class model aour robots and search field were connected
    

    useEffect(() =>{
        fetch('https://jsonplaceholder.cypress.io/users')
            .then(response => response.json())
            .then(users => {setRobots( users )});
    }, []);
    // The useEffect function gets run everytime the App function gets run
    // useEffect has two parameters... what it should do
    // and an array of states that  if there has been any change, useEffect will run

    // When there is a setting functien in useEffect there will be an infinite loop created because
    // every time useEffect is ran the set function is called

    // If you use an empty array it will run on the first time App is called and no others.



    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !robots.length ?
        <h1 id="loading">Loading...</h1> :
        ( 
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )
}

export default App;