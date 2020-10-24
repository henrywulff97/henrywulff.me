import React, { Component, ReactElement } from "react";
import "./../css/SideDialog.css";
import { translate } from "./../translations/translator"

type Props = {
    contentElement: ReactElement
    close: () => void
}

type State = {
    
}

export default class SideDialog extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return(
            <div className="side-dialog-wrapper">
                <div className="side-dialog-shadow" onClick={()=>this.props.close()}></div>
                <div className="side-dialog">
                    <div className="content">
                        {this.props.contentElement}
                    </div>
                </div>
            </div>
        )
    }
}