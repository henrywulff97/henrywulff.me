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
              {translate(5)}
            </div>
        )
    }
}