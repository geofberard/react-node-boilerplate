import React from "react";
import {COMMIT_NODE_SIZE} from "../const";
import Arc from "./Arc";

export default class Commit extends React.Component {
    render() {
        let tree = this.props.origins.map((origin, index) =>
            <Arc key={index} origin={origin} dest={this.props.commit} color={this.props.color}
                 type={this.props.origins.length > 1 ? "convexe" : "concave"}/>);
        let label = this.props.name == null ? "" :
            <text x={this.props.commit.x} y={this.props.commit.y} dx={COMMIT_NODE_SIZE + 10} dy={COMMIT_NODE_SIZE / 2}
                  fontSize={2 * COMMIT_NODE_SIZE} fill={this.props.color}
                  fontFamily="Arial">{this.props.name}</text>
        return (
            <g>
                {tree}
                <circle cx={this.props.commit.x} cy={this.props.commit.y} r={COMMIT_NODE_SIZE} fill={this.props.color}/>
                {label}
            </g>
        );
    }
}

export default Commit;
