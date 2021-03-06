import { ReactElement } from "react";
import React from "react";
import { translate } from "../../translations/translator";

export default abstract class PersonalProjects {
  public static ShortDesc(): ReactElement {
    return(
      <div>
        {translate(36)}
      </div>
    )
  }

  public static SideDialogContent(): ReactElement {
    return(
      <div className="personal-projects">
        <div className="main-header">
          {translate(20)}
        </div>
        <hr className="divider"/>
        <div className="sub-header">
          {translate(75)}
        </div>
        <div className="sub-header-add">
          {translate(76)}
        </div>
        <div className="text">
          {translate(77)}
        </div>
        <br/>
        <div className="sub-header">
          {translate(78)}
        </div>
        <div className="sub-header-add">
          {translate(79)}
        </div>
        <div className="text">
          {translate(80)}
        </div>
      </div>
    )
  }
}