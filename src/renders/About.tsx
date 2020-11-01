import React, { Component } from "react";
import { translate } from "./../translations/translator"
import "./../css/About.css";

type Props = {
    
}

type State = {
    
}

export default class About extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return(
            <div className="main-component about">
                <div>{translate(5)}</div>
                <div>{translate(11)}</div>
                <div>{translate(12)}</div>
                <div>{translate(13)}</div>
                <a className="github" href="https://github.com/henrywulff97/henrywulff.me" target="_blank" rel="noopener noreferrer">{translate(14)}</a>
            </div>
        )
    }
}