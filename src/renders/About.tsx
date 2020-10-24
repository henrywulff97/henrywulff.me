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
            <div className="about">
              {translate(5)}
            </div>
        )
    }
}