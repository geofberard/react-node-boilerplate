import React from "react";
import Branch from "./Branch";
import Commit from "./Commit";
import Conflict from "./Conflict";
import ConflictArc from "./ConflictArc";
import Arc from "./Arc";
import {COMMIT_DISTANCE, BRANCH_DISTANCE, COMMIT_NODE_SIZE, LINE_WIDTH, FONT_SIZE} from "../const";


export default class App extends React.Component {
    componentDidUpdate() {
        window.scrollTo(0,document.body.scrollHeight);
    }
    render() {
        let nbCommitMax = 5;
        let nbBranchMax = 3;

        let width = BRANCH_DISTANCE * (nbBranchMax + 3);
        let height = COMMIT_DISTANCE * (nbCommitMax + 2);

        let branchOffsetX = BRANCH_DISTANCE/2;

        let m_0 = {x:branchOffsetX, y:(height)};
        let m_1 = {x:branchOffsetX, y:(height - COMMIT_DISTANCE)};
        let m_2 = {x:branchOffsetX, y:(height - 2 * COMMIT_DISTANCE)};
        let m_4 = {x:branchOffsetX, y:(height - 4 * COMMIT_DISTANCE)};

        let f1_1 = {x:branchOffsetX + BRANCH_DISTANCE, y:(height - 3 * COMMIT_DISTANCE)};
        let f1_2 = {x:branchOffsetX + BRANCH_DISTANCE, y:(height - 4 * COMMIT_DISTANCE)};
        let f2_3 = {x:branchOffsetX + 2 * BRANCH_DISTANCE, y:(height - 4 * COMMIT_DISTANCE)};
        let f3_2 = {x:branchOffsetX + 3 * BRANCH_DISTANCE, y:(height - 3 * COMMIT_DISTANCE)};
        let f3_3 = {x:branchOffsetX + 3 * BRANCH_DISTANCE, y:(height - 4 * COMMIT_DISTANCE)};
        
        let conflict = {x:branchOffsetX, y:COMMIT_DISTANCE}

        let merge_f2_f3 = {x:(f2_3.x + f3_3.x)/2, y:(height - 4.5 * COMMIT_DISTANCE)};
        let merge = {x:branchOffsetX + 3 * BRANCH_DISTANCE, y:(height - 5 * COMMIT_DISTANCE)};

        return (
            <div>

                <div className="separator">Feature Branching</div>

                <svg height={height} width={width}>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Branch name="features/f1" commitNb={1} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={1} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <div className="separator">Merging</div>

                <svg height={height} width={width}>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={1} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Commit name="merge" origins={[m_4,f1_1,f2_3]} commit={merge} color="rgb(178,110,223)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={1} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <div className="separator">Continuous Merge</div>

                <svg height={height} width={width}>
                    <Commit name="merge" origins={[m_4,f1_1,f2_3]} commit={merge} color="rgb(178,110,223)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={1} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Commit name="merge" origins={[m_4,f1_1,f2_3]} commit={merge} color="rgb(178,110,223)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Commit name="merge" origins={[m_4,f1_2,f2_3]} commit={merge} color="rgb(178,110,223)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <div className="separator">What about conflict ?</div>

                <svg height={height} width={width}>
                    <Commit name="octopus" origins={[m_4,f1_2,f2_3]} commit={merge} color="rgb(178,110,223)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Commit name="octopus" origins={[m_4,f1_2,f2_3]} commit={merge} color="rgb(178,110,223)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Commit name="octopus" origins={[m_4,f1_2,f2_3,f3_3]} commit={merge} color="rgb(178,110,223)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Commit name="merge-master" origins={[m_4,f3_3]} commit={merge} color="rgb(241,143,46)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Commit name="merge-f1" origins={[f1_2,f3_3]} commit={merge} color="rgb(241,143,46)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Commit name="merge-f2" origins={[f2_3,f3_3]} commit={merge} color="rgb(241,143,46)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <div className="separator">Avoid Conflict</div>

                <svg height={height} width={width}>
                    <Commit name="octopus" origins={[m_4,f1_2,f2_3,f3_3]} commit={merge} color="rgb(178,110,223)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Branch name="" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Commit name="features/new*" origins={[]} commit={f3_3} color="rgb(244,210,62)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Commit name="octopus" origins={[m_4,f1_2,f2_3,f3_3]} commit={merge} color="rgb(178,110,223)"/>
                    <Branch name="" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Commit name="features/new*" origins={[]} commit={f3_3} color="rgb(244,210,62)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <div className="separator">Remove Branch</div>

                <svg height={height} width={width}>
                    <Commit name="octopus" origins={[m_4,f1_2,f2_3,f3_3]} commit={merge} color="rgb(178,110,223)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Branch name="studies/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(244,210,62)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Commit name="octopus" origins={[m_4,f1_2,f2_3]} commit={merge} color="rgb(178,110,223)"/>
                    <Branch name="studies/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(244,210,62)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <div className="separator">Merging Branch</div>

                <svg height={height} width={width}>
                    <Commit name="octopus" origins={[m_4,f1_2,f2_3,f3_3]} commit={merge} color="rgb(178,110,223)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Commit name="features/f2_new" origins={[f2_3,f3_3]} commit={merge_f2_f3} color="rgb(198,40,23)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Commit name="features/f2_new" origins={[f2_3,f3_3]} commit={merge_f2_f3} color="rgb(198,40,23)"/>
                    <Branch name="" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Commit name="octopus" origins={[m_4,f1_2,merge_f2_f3]} commit={merge} color="rgb(178,110,223)"/>
                    <Commit name="features/f2_new" origins={[f2_3,f3_3]} commit={merge_f2_f3} color="rgb(198,40,23)"/>
                    <Branch name="" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <div className="separator">Rebase Branche</div>

                <svg height={height} width={width}>
                    <Commit name="octopus" origins={[m_4,f1_2,f2_3,f3_3]} commit={merge} color="rgb(178,110,223)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Branch name="features/new" commitNb={3} origin={f2_3} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)" offsetY={3 * COMMIT_DISTANCE}/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Commit name="octopus" origins={[m_4,f1_2,f2_3,f3_3]} commit={merge} color="rgb(178,110,223)"/>
                    <Branch name="features/new" commitNb={3} origin={f2_3} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)" offsetY={3 * COMMIT_DISTANCE}/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <div className="separator">Git Conflict</div>

                <svg height={height} width={width}>
                    <Commit name="octopus" origins={[m_4,f1_2,f2_3,f3_3]} commit={merge} color="rgb(178,110,223)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Conflict position={conflict}/>
                    <Commit name="octopus" origins={[m_4,f1_2,f2_3,f3_3]} commit={merge} color="rgb(178,110,223)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Conflict position={conflict}/>
                    <Commit name="merge-f2" origins={[f2_3,f3_3]} commit={merge} color="rgb(241,143,46)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <text x={(conflict.x + merge.x)/2 - 40} y={conflict.y - 10} fontSize={3 * FONT_SIZE} fill="rgb(198,40,23)">? </text>
                    <Conflict position={conflict}/>
                    <ConflictArc origin={merge} dest={conflict} color="rgb(198,40,23)"/>
                    <Commit name="merge-f2" origins={[f2_3,f3_3]} commit={merge} color="rgb(241,143,46)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Conflict position={conflict}/>
                    <Commit name="conflict/f2_new" origins={[f2_3,f3_3]} commit={merge_f2_f3} color="rgb(198,40,23)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Conflict position={conflict} status="full"/>
                    <ConflictArc origin={merge_f2_f3} dest={conflict} color="rgb(198,40,23)"/>
                    <Commit name="conflict/f2_new" origins={[f2_3,f3_3]} commit={merge_f2_f3} color="rgb(198,40,23)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Conflict position={conflict} status="full"/>
                    <Commit name="merge-f2" origins={[f2_3,f3_3]} commit={merge} color="rgb(241,143,46)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Conflict position={conflict} status="full"/>
                    <text x={(conflict.x + merge.x)/2 - 40} y={conflict.y - 10} fontSize={3 * FONT_SIZE} fill="rgb(241,143,46)">? </text>
                    <ConflictArc origin={merge} dest={conflict} color="rgb(241,143,46)"/>
                    <Commit name="merge-f2" origins={[f2_3,f3_3]} commit={merge} color="rgb(241,143,46)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Conflict position={conflict} status="full"/>
                    <ConflictArc origin={merge} dest={conflict} color="rgb(178,110,223)"/>
                    <Commit name="octopus" origins={[m_4,f1_2,f2_3,f3_3]} commit={merge} color="rgb(178,110,223)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>
            </div>
        )
    }
}

export default App
