import React from "react";
import Branch from "./Branch";
import Commit from "./Commit";
import {COMMIT_DISTANCE, BRANCH_DISTANCE} from "../const";


export default class App extends React.Component {
    componentDidUpdate() {
        window.scrollTo(0,document.body.scrollHeight);
    }
    render() {
        let nbCommitMax = 5;
        let nbBranchMax = 3;

        let width = BRANCH_DISTANCE * (nbBranchMax + 3);
        let height = COMMIT_DISTANCE * (nbCommitMax + 1);

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
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)" commitDistance={2*COMMIT_DISTANCE}/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Commit name="octopus" origins={[m_4,f1_2,f2_3,f3_3]} commit={merge} color="rgb(178,110,223)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)" commitDistance={2*COMMIT_DISTANCE}/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Commit name="merge-master" origins={[m_4,f3_3]} commit={merge} color="rgb(241,143,46)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)" commitDistance={2*COMMIT_DISTANCE}/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Commit name="merge-f1" origins={[f1_2,f3_3]} commit={merge} color="rgb(241,143,46)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)" commitDistance={2*COMMIT_DISTANCE}/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Commit name="merge-f2" origins={[f2_3,f3_3]} commit={merge} color="rgb(241,143,46)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)" commitDistance={2*COMMIT_DISTANCE}/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <div className="separator">Avoid Conflict</div>

                <svg height={height} width={width}>
                    <Commit name="octopus" origins={[m_4,f1_2,f2_3,f3_3]} commit={merge} color="rgb(178,110,223)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)" commitDistance={2*COMMIT_DISTANCE}/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Branch name="" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)" commitDistance={2*COMMIT_DISTANCE}/>
                    <Commit name="features/new*" origins={[]} commit={f3_3} color="rgb(244,210,62)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Commit name="octopus" origins={[m_4,f1_2,f2_3,f3_3]} commit={merge} color="rgb(178,110,223)"/>
                    <Branch name="" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)" commitDistance={2*COMMIT_DISTANCE}/>
                    <Commit name="features/new*" origins={[]} commit={f3_3} color="rgb(244,210,62)"/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <div className="separator">Remove Branch</div>

                <svg height={height} width={width}>
                    <Commit name="octopus" origins={[m_4,f1_2,f2_3,f3_3]} commit={merge} color="rgb(178,110,223)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)" commitDistance={2*COMMIT_DISTANCE}/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Branch name="studies/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(244,210,62)" commitDistance={2*COMMIT_DISTANCE}/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Commit name="octopus" origins={[m_4,f1_2,f2_3]} commit={merge} color="rgb(178,110,223)"/>
                    <Branch name="studies/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(244,210,62)" commitDistance={2*COMMIT_DISTANCE}/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <div className="separator">Merging Branch</div>

                <svg height={height} width={width}>
                    <Commit name="octopus" origins={[m_4,f1_2,f2_3,f3_3]} commit={merge} color="rgb(178,110,223)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)" commitDistance={2*COMMIT_DISTANCE}/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Commit name="features/f2_new" origins={[f2_3,f3_3]} commit={merge_f2_f3} color="rgb(198,40,23)"/>
                    <Branch name="features/new" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)" commitDistance={2*COMMIT_DISTANCE}/>
                    <Branch name="features/f2" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Commit name="features/f2_new" origins={[f2_3,f3_3]} commit={merge_f2_f3} color="rgb(198,40,23)"/>
                    <Branch name="" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)" commitDistance={2*COMMIT_DISTANCE}/>
                    <Branch name="" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <svg height={height} width={width}>
                    <Commit name="octopus" origins={[m_4,f1_2,merge_f2_f3]} commit={merge} color="rgb(178,110,223)"/>
                    <Commit name="features/f2_new" origins={[f2_3,f3_3]} commit={merge_f2_f3} color="rgb(198,40,23)"/>
                    <Branch name="" commitNb={3} origin={m_1} offsetX={3 * BRANCH_DISTANCE} color="rgb(114,199,69)" commitDistance={2*COMMIT_DISTANCE}/>
                    <Branch name="" commitNb={3} origin={m_1} offsetX={2 * BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="features/f1" commitNb={2} origin={m_2} offsetX={BRANCH_DISTANCE} color="rgb(114,199,69)"/>
                    <Branch name="master" commitNb={4} origin={m_0} offsetX={0} color="rgb(86,169,246)"/>
                    Sorry, your browser does not support inline SVG.
                </svg>
            </div>
        )
    }
}

export default App
