import React from "react";
import {COMMIT_DISTANCE, COMMIT_NODE_SIZE} from "../const";
import Commit from "./Commit";

export default class Branch extends React.Component {
    render() {
        let commits = [];
        let head = this.props.origin;
        for (let i = 1; i <= this.props.commitNb; i++) {
            let commit = {x: (head.x + (i == 1 ? this.props.offsetX : 0)), y: (head.y - COMMIT_DISTANCE)};
            commits.push(<Commit origin={head} commit={commit} color={this.props.color}/>)
            head = commit;
        }
        return (
            <g>
                {commits}
                <text x={head.x} y={head.y} dx={COMMIT_NODE_SIZE + 10} dy={COMMIT_NODE_SIZE / 2}
                      fontSize={2 * COMMIT_NODE_SIZE} fill={this.props.color}
                      fontFamily="Arial">{this.props.name}</text>
            </g>
        );
    }
}

export default Branch;
