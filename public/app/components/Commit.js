import React from "react";
import {COMMIT_NODE_SIZE, FONT_SIZE} from "../const";
import Arc from "./Arc";
import Node from "./Node";

export default class Commit extends React.Component {
    render() {
        let tree = this.props.origins.map((origin, index) =>
            <Arc key={index} origin={origin} dest={this.props.commit} color={this.props.color}
                 type={this.props.origins.length > 1 ? "convexe" : "concave"}/>);
        let label = this.props.name == null ? "" :
            <text x={this.props.commit.x} y={this.props.commit.y} dx={COMMIT_NODE_SIZE + 10} dy={FONT_SIZE / 4}
                  fontSize={FONT_SIZE} fill={this.props.color}
                  fontFamily="Arial">{this.props.name}</text>
        return (
            <g>
                {tree}
                <Node commit={this.props.commit} color={this.props.color}/>
                {label}
            </g>
        );
    }
}

export default Commit;
