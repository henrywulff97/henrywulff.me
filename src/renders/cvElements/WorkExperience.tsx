import { ReactElement } from "react";
import React from "react";
import { translate } from "../../translations/translator";

export default abstract class WorkExperience {
  public static ShortDesc(): ReactElement {
    return(
      <div>
        {translate(39)}
      </div>
    )
  }

  public static SideDialogContent(): ReactElement {
    return(
      <div className="work-experience">
        <div className="main-header">
          {translate(17)}
        </div>
        <hr className="divider"/>
        <div className="sub-header">
          {translate(45)}
        </div>
        <div className="sub-header-add">
          {translate(46)}
        </div>
        <div className="addition">
          {translate(52)}
        </div>
        <div className="list">
          <div className="item">
            {translate(48)}
          </div>
          <div className="item">
            {translate(49)}
          </div>
        </div>
        <br/>
        <div className="sub-header">
          {translate(45)}
        </div>
        <div className="sub-header-add">
          {translate(47)}
        </div>
        <div className="addition">
          {translate(53)}
        </div>
        <div className="list">
          <div className="item">
            {translate(50)}
          </div>
          <div className="item">
            {translate(94)}
          </div>
          <div className="item">
            {translate(51)}
          </div>
        </div>
        <br/>
        <div className="sub-header">
          {translate(54)}
        </div>
        <div className="sub-header-add">
          {translate(55)}
        </div>
        <div className="addition">
          {translate(56)}
        </div>
        <div className="list">
          <div className="item">
            {translate(57)}
          </div>
          <div className="item">
            {translate(58)}
          </div>
        </div>
      </div>
    )
  }
}