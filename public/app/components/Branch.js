import React from "react";
import {COMMIT_DISTANCE, COMMIT_NODE_SIZE, LINE_WIDTH} from "../const";

export default class Branch extends React.Component {
    render() {
        let branch = [];
        for (let i = 1; i <= this.props.commitNb; i++) {
            var originX = this.props.origin.x;
            var originY = this.props.origin.y;

            if (i == 1 && this.props.offsetX != 0) {
                branch.push(<path d={"M "+ originX+" "+ originY+" Q "+(originX + this.props.offsetX)+" "+originY+" "+(originX + this.props.offsetX)+" "+(originY - COMMIT_DISTANCE)}
                                  stroke={this.props.color}
                                  strokeWidth={LINE_WIDTH}
                                  fill="none" />)
            } else {
                branch.push(<line x1={originX + this.props.offsetX}
                                  y1={originY - COMMIT_DISTANCE * ( i - 1)}
                                  x2={originX + this.props.offsetX}
                                  y2={originY - COMMIT_DISTANCE * i}
                                  stroke={this.props.color}
                                  strokeWidth={LINE_WIDTH}/>)
            }
            branch.push(<circle cx={originX + this.props.offsetX}
                                cy={originY - COMMIT_DISTANCE * i}
                                r={COMMIT_NODE_SIZE}
                                fill={this.props.color}/>)
        }
        branch.push(<text x={originX + this.props.offsetX}
                          y={originY - COMMIT_DISTANCE * this.props.commitNb}
                          dx={COMMIT_NODE_SIZE + 10}
                          dy={COMMIT_NODE_SIZE/2}
                          fontSize={2 * COMMIT_NODE_SIZE}
                          fill={this.props.color}
                          fontFamily="Arial">{this.props.name}</text>);
        return <g>{branch}</g>;
    }
}

export default Branch;
