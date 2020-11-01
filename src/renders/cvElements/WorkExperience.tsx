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
      </div>
    )
  }
}