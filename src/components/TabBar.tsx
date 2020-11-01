import React, { Component } from "react";
import "./../css/TabBar.css";
import { translate } from "./../translations/translator"

type Props = {
    onTabClick: (possiblePage: "home" | "cv" | "about" | "imprint") => string
}

type State = {
    activeTab: "home" | "cv" | "about" | "imprint"
}

export default class TabBar extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            activeTab: "home"
        }
    }

    changeLanguage() {
        if (sessionStorage.getItem("activeLanguage") === "de") {
            sessionStorage.setItem("activeLanguage", "en")
        }
        else {
            sessionStorage.setItem("activeLanguage", "de")
        }

        window.location.reload()
    }

    handleTabClick(possiblePage: "home" | "cv" | "about" | "imprint") {
        this.props.onTabClick(possiblePage)
        this.setState({
            activeTab: possiblePage
        })
    }

    renderTabBar() {
        const tabclassName = "tab";
        const activeTabClassName = "is-active";
        let cvClassName = tabclassName;
        let aboutClassName = tabclassName;
        let imprintClassName = tabclassName;
        cvClassName += this.state.activeTab === "cv" ? " " + activeTabClassName : "";
        aboutClassName += this.state.activeTab === "about" ? " " + activeTabClassName : "";
        imprintClassName += this.state.activeTab === "imprint" ? " " + activeTabClassName : "";

        return (
            <div className="tab-bar">
                <div className={cvClassName} onClick={()=>this.handleTabClick("cv")}>{translate(1)}</div>
                <div className={aboutClassName} onClick={()=>this.handleTabClick("about")}>{translate(2)}</div>
                <div className={imprintClassName} onClick={()=>this.handleTabClick("imprint")}>{translate(3)}</div>
            </div>
        )
    }

    render() {
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <div className="logo" onClick={()=>this.handleTabClick("home")}>{translate(0)}</div>
                </div>
                <div className="top-bar-center">
                    {this.renderTabBar()}
                </div>
                <div className="top-bar-right">
                    <div className="languageToggle" onClick={()=>this.changeLanguage()}>DE/EN</div>
                </div>
            </div>
        )
    }
}