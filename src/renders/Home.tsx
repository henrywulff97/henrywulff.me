import React, { Component } from "react";
import { translate } from "./../translations/translator"

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
              Home
            </div>
        )
    }
}