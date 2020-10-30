import React, { Component, ReactElement } from "react";
import "./../css/Widget.css";
import { translate } from "./../translations/translator"

type Props = {
    coverText: string,
    text: ReactElement
    onOpenSideDialog: () => void
}

type State = {
    showContent: boolean
}

export default class Widget extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            showContent: false
        }
    }

    toggleWidgetCover() {
        this.setState({
            showContent: !this.state.showContent
        })
    }

    render() {
        return(
            <div className="widget" onClick={()=>this.toggleWidgetCover()}>
                {this.state.showContent ? (
                    <div className="content">
                        {this.props.text}
                        <div className="open-side-dialog" onClick={()=>this.props.onOpenSideDialog()}>
                            {translate(10)}
                        </div>
                    </div>
                ) : 
                (
                    <div className="cover">
                        {this.props.coverText}
                    </div>
                )}
            </div>
        )
    }
}