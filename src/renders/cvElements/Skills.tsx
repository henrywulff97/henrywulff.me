import { ReactElement } from "react";
import React from "react";
import { translate } from "../../translations/translator";

export default abstract class Skills {
  public static ShortDesc(): ReactElement {
    return(
      <div>
        {translate(38)}
      </div>
    )
  }

  public static SideDialogContent(): ReactElement {
    return(
      <div className="skills">
        <div className="main-header">
          {translate(16)}
        </div>
        <hr className="divider"/>
        <div className="sub-header-add">
          {translate(41)}
        </div>
        <div className="text">
          {translate(95)}
        </div>
        <br/>
        <div className="sub-header-add">
          {translate(42)}
        </div>
        <div className="text">
          {translate(96)}
        </div>
        <br/>
        <div className="sub-header-add">
          {translate(43)}
        </div>
        <div className="text">
          {translate(97)}
        </div>
        <br/>
        <div className="sub-header-add">
          {translate(44)}
        </div>
        <div className="text">
          {translate(98)}
        </div>
      </div>
    )
  }
}