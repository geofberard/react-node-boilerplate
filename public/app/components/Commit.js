import React from "react";
import {COMMIT_NODE_SIZE} from "../const";
import Arc from "./Arc";

export default class Commit extends React.Component {
    render() {
        return (
            <g>
                <Arc origin={this.props.origin} dest={this.props.commit} color={this.props.color}/>
                <circle cx={this.props.commit.x} cy={this.props.commit.y} r={COMMIT_NODE_SIZE} fill={this.props.color}/>
            </g>
        );
    }
}

export default Commit;
