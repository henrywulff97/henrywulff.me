import { ReactElement } from "react";
import React from "react";
import { translate } from "../../translations/translator";

export default abstract class Education {
  public static ShortDesc(): ReactElement {
    return(
      <div>
        {translate(40)}
      </div>
    )
  }

  public static SideDialogContent(): ReactElement {
    return(
      <div className="education">
        <div className="main-header">
          {translate(18)}
        </div>
        <hr className="divider"/>
        <div className="sub-header">
          {translate(59)}
        </div>
        <div className="sub-header-add">
          {translate(60)}
        </div>
        <div className="addition">
          {translate(61)}
        </div>
        <div className="text">
          {translate(62)}
        </div>
        <br/>
        <div className="sub-header">
          {translate(63)}
        </div>
        <div className="sub-header-add">
          {translate(64)}
        </div>
        <div className="addition">
          {translate(65)}
        </div>
      </div>
    )
  }
}