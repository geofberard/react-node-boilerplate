import React from "react";
import fetch from "isomorphic-fetch";

function DataLoader(element) {
    this.load = function () {
        fetch("/api/helloworld")
            .then(response => response.json())
            .then(data => element.setState({data: data.value}));
    }
}

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {data: "Loading ..."};
    }

    componentDidMount() {
        new DataLoader(this).load();
    }

    render() {
        return (
            <div> {this.state.data} </div>
        )
    }
}

export default App
