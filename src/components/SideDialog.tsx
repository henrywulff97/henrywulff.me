import React, { Component, ReactElement } from "react";
import "./../css/SideDialog.css";

type Props = {
    contentElement: ReactElement
    close: () => void
}

type State = {
    
}

export default class SideDialog extends Component<Props, State> {
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