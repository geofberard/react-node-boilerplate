import React from "react";
import {COMMIT_DISTANCE} from "../const";
import Commit from "./Commit";

export default class Branch extends React.Component {
    render() {
        let commits = [];
        let head = this.props.origin;
        for (let i = 1; i <= this.props.commitNb; i++) {
            let commit = {x: (head.x + (i == 1 ? this.props.offsetX : 0)), y: (head.y - COMMIT_DISTANCE)};
            commits.push(<Commit name={i == this.props.commitNb ? this.props.name : ""} key={i}
                                 origins={[head]} commit={commit} color={this.props.color}/>)
            head = commit;
        }
        return (
            <g>
                {commits}
            </g>
        );
    }
}

export default Branch;
