import React from "react";
import {COMMIT_NODE_SIZE, FONT_SIZE} from "../const";

export default class Conflict extends React.Component {
    render() {
        let circle
        if(this.props.status == "full") {
            circle = <circle cx={this.props.position.x} cy={this.props.position.y} r={COMMIT_NODE_SIZE+4} fill="rgb(198,40,23)"/>
        } else {
            circle = <circle cx={this.props.position.x} cy={this.props.position.y} r={COMMIT_NODE_SIZE+4} fill="none" strokeDasharray="8,7" stroke="rgb(198,40,23)" strokeWidth={4}/>
        }
        return (
            <g>
                <text x={this.props.position.x} y={this.props.position.y} dx={0 - COMMIT_NODE_SIZE - 5} dy={0 - COMMIT_NODE_SIZE - 20}
                      fontSize={FONT_SIZE} fill="rgb(198,40,23)"
                      fontFamily="Arial">conflict/resolution</text>
                {circle}
            </g>
        );
    }
}

Conflict.propTypes = {status: React.PropTypes.oneOf(['empty', 'full'])};
Conflict.defaultProps = {status: 'empty'};

export default Conflict;
