import React from "react";
import {LINE_WIDTH} from "../const";

export default class Arc extends React.Component {
    render() {
        if (this.props.origin.x != this.props.dest.x) {
            let middle = this.props.type == 'concave' ? {x: this.props.dest.x, y: this.props.origin.y} : {x: this.props.origin.x, y: this.props.dest.y};
            let d = "M " + this.props.origin.x + " " + this.props.origin.y
                + " Q " + middle.x + " " + middle.y
                + " " + this.props.dest.x + " " + this.props.dest.y;
            return <path d={d} stroke={this.props.color} strokeWidth={LINE_WIDTH} fill="none"/>
        } else {
            return <line x1={this.props.origin.x} y1={this.props.origin.y}
                         x2={this.props.dest.x} y2={this.props.dest.y}
                         stroke={this.props.color} strokeWidth={LINE_WIDTH}/>
        }
    }
}

Arc.propTypes = {type: React.PropTypes.oneOf(['convexe', 'concave'])};
Arc.defaultProps = {type: 'concave'};

export default Arc;
