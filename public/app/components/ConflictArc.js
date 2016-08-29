import React from "react";
import {COMMIT_NODE_SIZE} from "../const";
import Arc from "./Arc"

export default class ConflictArc extends React.Component {
    render() {
        let dest = {x:this.props.dest.x + COMMIT_NODE_SIZE + 20, y:this.props.dest.y};
        let middle = {x: this.props.origin.x, y: dest.y};
        let d = "M " + this.props.origin.x + " " + this.props.origin.y
            + " Q " + middle.x + " " + middle.y
            + " " + dest.x + " " + dest.y;
        return (
            <g>
                <defs>
                    <marker id="Triangle" viewBox="0 0 10 10" refX="1" refY="5"
                            markerUnits="strokeWidth" markerWidth="4" markerHeight="3"
                            orient="auto">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill={this.props.color}/>
                    </marker>
                </defs>
                <path d={d} stroke={this.props.color} strokeWidth="6" fill="none"  markerEnd="url(#Triangle)"></path>
            </g>
        );
    }
}

export default ConflictArc;
