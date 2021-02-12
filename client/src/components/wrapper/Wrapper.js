import React from 'react';
import Sunburst from '../Sunburst/Sunburst'
import data from '../../data.js';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

export default function Wrapper(props) {
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
            <Switch>
                <Route path="/home">
                    <div>
                        Anothoer side div
                    </div>
                </Route>
                <Route path="/burst">

                    <div style={{ position: 'absolute' }}>
                        <Sunburst
                            data={data}
                            onSelect={onSelect}
                            scale="linear"
                            tooltipContent={<div class="sunburstTooltip" style="position:absolute; color:'black'; z-index:10; background: #e2e2e2; padding: 5px; text-align: center;" />}
                            tooltip
                            tooltipPosition="right"
                            keyId="anagraph"
                            width={480 * 1.8}
                            height={400 * 1.8}
                            radius={(480 * 1.8) / 6}
                        />
                    </div>

                </Route>
            </Switch>


        </div>
    )

}