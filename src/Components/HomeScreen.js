import React from 'react';
import Background from '../static/graph.png';
import Background2 from '../static/Customer360.jpg';



const HomeScreen = () => {
    const routeGraph = () => {
        let path = `/graph`;
        window.location = path
    }
    const route360 = () => {
        window.location.href = "http://10.228.32.54:8504/";
    }
    return (
        <div className="App">
            <div class="header">
                <h1>Graph PoC</h1>
                <p>Findings and links to Visualization of Affiliation Management usecase and Customer 360 usecase</p>
            </div>
            <div className="CardContainer">
                <a  onClick={routeGraph} className="Card" style={{
                    float: "left",
                    borderRadius: "25px",
                    // border:"solid 1px white",
                    backgroundImage: `url(${Background})`,
                }}
                ><mark>Affiliation Management</mark></a>

                <a onClick={route360} className="Card" style={{
                    float: "right",
                    borderRadius: "25px",
                    // border:"solid 1px white",
                    backgroundImage: `url(${Background2})`,
                }}
                ><mark>Customer 360 Usecase</mark></a>
            </div>
        </div>
    );
}

export default HomeScreen;