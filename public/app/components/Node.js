import React from "react";
import {COMMIT_NODE_SIZE} from "../const";

export default class Node extends React.Component {
    render() {
        return (
            <circle cx={this.props.commit.x} cy={this.props.commit.y} r={COMMIT_NODE_SIZE} fill={this.props.color}/>
        );
    }
}

export default Node;
