import React from "react";
import "./Header.css";

const Header = props => 
   (<nav className="nav nav-fill headerStyle">
        <li className="nav-item">Marvel Clicky Game</li> 
        {/* {{add in href later for link} <li class="nav-link active" href="#">Active</li>} */}
        <li className="nav-item">Click an image to begin!</li>


        {/*game logic for points will go here...*/}
        <li className="nav-item">Score: {props.score} | Top Score: {props.top}</li>
    </nav>);

export default Header;
