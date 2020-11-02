import { ReactElement } from "react";
import React from "react";
import { translate } from "../../translations/translator";

export default abstract class Languages {
  public static ShortDesc(): ReactElement {
    return(
      <div>
        {translate(34)}
      </div>
    )
  }

  public static SideDialogContent(): ReactElement {
    return(
      <div className="languages">
        <div className="main-header">
          {translate(19)}
        </div>
        <hr className="divider"/>
        <div className="sub-header">
          {translate(66)}
        </div>
        <div className="sub-header-add">
          {translate(67)}
        </div>
        <div className="text">
          {translate(68)}
        </div>
        <br/>
        <div className="sub-header">
          {translate(69)}
        </div>
        <div className="sub-header-add">
          {translate(67)}
        </div>
        <div className="text">
          {translate(70)}
        </div>
        <br/>
        <div className="sub-header">
          {translate(71)}
        </div>
        <div className="sub-header-add">
          {translate(72)}
        </div>
        <div className="text">
          {translate(73)}
        </div>
      </div>
    )
  }
}