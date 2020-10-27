import React, { Component, useRef } from "react";
import "./css/App.css";
import { TabBar } from "./components/components";
import { About, CV, Home, Imprint } from "./renders/renders";
import { SwitchTransition, CSSTransition } from 'react-transition-group'

type Props = {
    
}

type State = {
    activePage: "home" | "cv" | "about" | "imprint"
}

export default class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            activePage: "home",
        }

        this.changePage = this.changePage.bind(this);

        sessionStorage.setItem("activeLanguage", "de")
    }

    changePage(possiblePage: "home" | "cv" | "about" | "imprint"): string {
        this.setState({
            activePage: possiblePage
        })

        return(possiblePage)
    }

    renderHome() {
        return(
            <Home/>
        )
    }

    renderCV() {
        return(
            <CV/>
        )
    }

    renderAbout() {
        return(
            <About/>
        )
    }

    renderImprint() {
        return(
            <Imprint/>
        )
    }

    renderNight() {
        return(
            <div className="night">
                {
                    [...Array(30)].map((e, i) => <div className="shooting_star"></div>)
                }
            </div>
        )
    }

    render() {
        const packageJSON = require('./../package.json')
        const currentPage = this.state.activePage;
        let pageContent;

        switch (currentPage) {
            case "home":
                pageContent = this.renderHome();
                break;
            case "cv":
                pageContent = this.renderCV();
                break;
            case "about":
                pageContent = this.renderAbout();
                break;
            case "imprint":
                pageContent = this.renderImprint();
                break;
            default:
                break;
        }

        return(
            <div className="app-wrapper">
                {this.renderNight()}
                <TabBar onTabClick={this.changePage}/>
                <div className="page-content-wrapper">
                    {pageContent}
                </div>
                <div className="footer">{packageJSON.name} - {packageJSON.version}</div>
            </div>
        )
    }
}
