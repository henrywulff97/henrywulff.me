import React, { Component, ReactElement } from "react";
import "./../css/CV.css";
import { translate } from "./../translations/translator";
import { SideDialog, Widget } from "./../components/components";
import { Education, Hobbies, Languages, Miscellaneous, PersonalData, PersonalProjects, Health, Skills, WorkExperience } from "./cvElements/cvElements";

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
                        <Widget coverText={translate(15)} text={PersonalData.ShortDesc()} onOpenSideDialog={()=>this.openSideDialog(PersonalData.SideDialogContent())}/>
                    </div>
                    <div className="cell medium-4">
                        <Widget coverText={translate(16)} text={Skills.ShortDesc()} onOpenSideDialog={()=>this.openSideDialog(Skills.SideDialogContent())}/>
                    </div>
                    <div className="cell medium-4">
                        <Widget coverText={translate(17)} text={WorkExperience.ShortDesc()} onOpenSideDialog={()=>this.openSideDialog(WorkExperience.SideDialogContent())}/>
                    </div>
                </div>
                <div className="grid-x">
                    <div className="cell medium-4">
                        <Widget coverText={translate(18)} text={Education.ShortDesc()} onOpenSideDialog={()=>this.openSideDialog(Education.SideDialogContent())}/>
                    </div>
                    <div className="cell medium-4">
                        <Widget coverText={translate(19)} text={Languages.ShortDesc()} onOpenSideDialog={()=>this.openSideDialog(Languages.SideDialogContent())}/>
                    </div>
                    <div className="cell medium-4">
                        <Widget coverText={translate(20)} text={PersonalProjects.ShortDesc()} onOpenSideDialog={()=>this.openSideDialog(PersonalProjects.SideDialogContent())}/>
                    </div>
                </div>
                <div className="grid-x">
                    <div className="cell medium-4">
                        <Widget coverText={translate(89)} text={Health.ShortDesc()} onOpenSideDialog={()=>this.openSideDialog(Health.SideDialogContent())}/>
                    </div>
                    <div className="cell medium-4">
                        <Widget coverText={translate(22)} text={Hobbies.ShortDesc()} onOpenSideDialog={()=>this.openSideDialog(Hobbies.SideDialogContent())}/>
                    </div>
                    <div className="cell medium-4">
                        <Widget coverText={translate(23)} text={Miscellaneous.ShortDesc()} onOpenSideDialog={()=>this.openSideDialog(Miscellaneous.SideDialogContent())}/>
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