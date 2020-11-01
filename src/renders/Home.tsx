import React, { Component } from "react";
import "./../css/Home.css";
import { translate } from "./../translations/translator"
import me from './../resources/HWU.jpg';

type Props = {
    
}

type State = {
    
}

export default class Home extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return(
            <div className="main-component">
                <div className="homepage-text">
                    <div className="my-name">
                        {translate(0)}
                    </div>
                    <div className="my-title">
                        {translate(24)}
                    </div>
                    <hr className="divider"/>
                    <div className="welcome">
                        {translate(25)}
                    </div>
                    <img className="portrait" src={me} alt="portrait"/>
                </div>
            </div>
        )
    }
}