import React from "react";
import Branch from "./Branch";
import {COMMIT_DISTANCE, BRANCH_DISTANCE} from "../const";


export default class App extends React.Component {
    render() {
        let nbCommitMax = 4;
        let nbBranchMax = 3;

        let width = BRANCH_DISTANCE * (nbBranchMax + 3);
        let height = COMMIT_DISTANCE * (nbCommitMax + 1);

        let branchOffsetX = BRANCH_DISTANCE/2;

        let m0 = {x:branchOffsetX, y:(height)}
        let m1 = {x:branchOffsetX, y:(height - COMMIT_DISTANCE)}
        let m2 = {x:branchOffsetX, y:(height - 2 * COMMIT_DISTANCE)}

        let style = {stroke:"rgb(114,199,69)",strokeWidth:4};
        return (
            <svg height={height} width={width}>
                <Branch name="master" commitNb={4} origin={m0} offsetX={0} color="rgb(86,169,246)"/>
                <Branch name="features/f1" commitNb={1} origin={m2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                <Branch name="features/f2" commitNb={3} origin={m1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                Sorry, your browser does not support inline SVG.
            </svg>
        )
    }
}

export default App
