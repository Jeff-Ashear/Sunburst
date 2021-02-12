import React from 'react';

import Wrapper from '../wrapper/Wrapper'
import data from '../../data.js';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default function Main(props) {
    let onSelect = (event) => {
        console.log(event)
    }
    return (
        <div>
           
                <Link to="/home">
                    home
                </Link>
                <Link to="/burst">
                    Burst
                </Link>
                <Route path="/home">
                    <div>
                        Anothoer side div
                    </div>
                </Route>
                <Route path="/burst">

                <div style={{position: 'absolute'}}>
                    <Wrapper/>
                </div>
                    
                </Route>
            

        </div>
    )

}