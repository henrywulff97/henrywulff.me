import React, { Component } from "react";
import { translate } from "./../translations/translator"
import "./../css/Imprint.css";

type Props = {
    
}

type State = {
    
}

export default class Imprint extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return(
            <div className="imprint">
                <div className="text">
                    {translate(0)}
                </div>
                <div className="text">
                    {translate(6)}
                </div>
                <div className="text">
                    {translate(7)}
                </div>
                <br/>
                <div className="text">
                    {translate(8)}
                </div>
                <div className="text">
                    {translate(9)}
                </div>
            </div>
        )
    }
}