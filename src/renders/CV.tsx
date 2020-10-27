import React, { Component, ReactElement } from "react";
import "./../css/CV.css";
import { translate } from "./../translations/translator";
import { SideDialog, Widget } from "./../components/components";
import { getElement } from "./sideDialogContents/sideDialogContents";

type Props = {
    
}

type State = {
    sideDialogElement?: ReactElement
}

export default class CV extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            sideDialogElement: undefined
        }

        this.closeSideDialog = this.closeSideDialog.bind(this);
    }

    closeSideDialog() {
        this.setState({
            sideDialogElement: undefined
        })
    }

    openSideDialog(element: ReactElement) {
        this.setState({
            sideDialogElement: element
        })
    }

    render() {
        const widgets = (
            <div className="cv-wrapper">
                <div className="grid-x">
                    <div className="cell medium-4">
                        <Widget coverText="test" text="test 2 lol" onOpenSideDialog={()=>this.openSideDialog(getElement())}/>
                    </div>
                    <div className="cell medium-4">
                        <Widget coverText="test" text="test 2 lol" onOpenSideDialog={()=>this.openSideDialog(getElement())}/>
                    </div>
                    <div className="cell medium-4">
                        <Widget coverText="test" text="test 2 lol" onOpenSideDialog={()=>this.openSideDialog(getElement())}/>
                    </div>
                </div>
                <div className="grid-x">
                    <div className="cell medium-4">
                        <Widget coverText="test" text="test 2 lol" onOpenSideDialog={()=>this.openSideDialog(getElement())}/>
                    </div>
                    <div className="cell medium-4">
                        <Widget coverText="test" text="test 2 lol" onOpenSideDialog={()=>this.openSideDialog(getElement())}/>
                    </div>
                    <div className="cell medium-4">
                        <Widget coverText="test" text="test 2 lol" onOpenSideDialog={()=>this.openSideDialog(getElement())}/>
                    </div>
                </div>
                <div className="grid-x">
                    <div className="cell medium-4">
                        <Widget coverText="test" text="test 2 lol" onOpenSideDialog={()=>this.openSideDialog(getElement())}/>
                    </div>
                    <div className="cell medium-4">
                        <Widget coverText="test" text="test 2 lol" onOpenSideDialog={()=>this.openSideDialog(getElement())}/>
                    </div>
                    <div className="cell medium-4">
                        <Widget coverText="test" text="test 2 lol" onOpenSideDialog={()=>this.openSideDialog(getElement())}/>
                    </div>
                </div>
            </div>
        )                 


        if(this.state.sideDialogElement) {
            return(
                <div className="main-component">
                    {widgets}
                    <SideDialog contentElement={this.state.sideDialogElement} close={this.closeSideDialog}/>
                </div>
            )
        }
        else {
            return(
                <div className="main-component">
                    {widgets}
                </div>
            )
        }
    }
}